const express = require('express')
const db = require('../db')
const myMisc = require('../misc.js')
const pug = require('pug')

//
const router = express.Router()

//
router.post(
    '/comment',
    async (req, res) => {
        if(req.session.user) {

            //
            const {rows} = await db.getCommentWithPublic(req.body.commentid)

            //
            if(rows.length) {

                //
                const isAllowed = await db.isAllowedToViewPost(
                    rows[0].private_group_ids,
                    req.session.user.user_id)

                if(!isAllowed) {
                    return res.json(0)
                }

                //
                let [compressedComment, errors] = myMisc.processComment(req.body.text_content)

                if(errors.length) {
                    res.json(0)
                }
                else {

                    //
                    const {rows:data1} = await db.createCommentComment(
                        rows[0].post_id,
                        req.session.user.user_id,
                        compressedComment,
                        rows[0].path,
                        myMisc.getCurrTimeZone(req))

                    //TODO: make this a postgres trigger
                    await db.incPostNumComments(rows[0].post_id)

                    //
                    data1[0].by = req.session.user.username

                    //
                    const sPublicId = req.session.user.public_id

                    // this user public_id may not be set on the session if
                    // they've been logged in for a long time, so get it from the db
                    // if it's not there
                    if(typeof sPublicId == 'undefined') {
                        const {rows:[xRow]} = await db.getUserWithUserId(req.session.user.user_id)
                        data1[0].user_public_id = xRow.public_id
                    }
                    else {
                        data1[0].user_public_id = sPublicId
                    }

                    //
                    const bbCodesOnly = pug.compileFile('views/bbCodesOnly.pug')
                    data1[0].text_content = bbCodesOnly({text: data1[0].text_content})

                    //
                    res.json(data1[0])
                }
            }
            else {
                res.json(0)
            }
        }
        else {
            res.json(0)
        }
    }
)

//
module.exports = router
