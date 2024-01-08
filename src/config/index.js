
/*
These should be set to username, user_id
and public_id from a single row in the tuser
database table.
*/
exports.adminUsername = "admin"
exports.adminUserId = 1
exports.adminPublicUserId = 'nuj9QJARKnM1bg9bIOL5jA'

//
exports.commentsPerPage = 200
exports.siteName = "Comment Castles"
exports.contactEmail = "commentcastles@proton.me"

exports.siteBaseUrl = "https://www.commentcastles.org"
exports.apiBaseUrl = `${module.exports.siteBaseUrl}/api/v1`
exports.jsDir = '/js'
exports.cssDir = '/css'

exports.defaultTimeZone = 'UTC'
exports.defaultCommentReplyMode = 'quick'
exports.defaultViewMode = 'following-only'

//
exports.defaultPostLayout = 'single-line'
exports.singleLineCutoff = 1200

//
exports.defaultSiteWidth = 1200
exports.minSiteWidth = 500
exports.maxSiteWidth = 1500

//
exports.defaultPostsPerPage = 30
exports.minPostsPerPage = 5
exports.maxPostsPerPage = 50

//
exports.defaultPostsVerticalSpacing = 14
exports.minPostsVerticalSpacing = 2
exports.maxPostsVerticalSpacing = 40

//
exports.defaultTwoBgColor = 'b6b09e'
exports.defaultOneBgColor = 'fefefe'
exports.defaultMainTextColor = '232323'
exports.defaultPostLinkColor = '0000ff'
exports.defaultPostLinkVisitedColor = '551a8b'
exports.defaultGroupBgColor = 'e6e7dc'
exports.defaultGroupTextColor = '030303'
exports.defaultHiddenColor = 'b2b2b2'
exports.defaultDomainNameColor = '50794b'
exports.defaultUnfollowBgColor = 'f3cece'
exports.defaultUnfollowLineColor = '666666'
exports.defaultUnfollowTextColor = '000000'

//
exports.singleUrlRegex = /^(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]$/i

//generated with scripts/gen-config-time-zones.js
exports.timeZones = [
    {name:"Pacific/Midway",utc_offset:{hours:-11}},
    {name:"Pacific/Niue",utc_offset:{hours:-11}},
    {name:"Pacific/Pago_Pago",utc_offset:{hours:-11}},
    {name:"Pacific/Samoa",utc_offset:{hours:-11}},
    {name:"US/Samoa",utc_offset:{hours:-11}},
    {name:"HST",utc_offset:{hours:-10}},
    {name:"Pacific/Honolulu",utc_offset:{hours:-10}},
    {name:"Pacific/Johnston",utc_offset:{hours:-10}},
    {name:"Pacific/Rarotonga",utc_offset:{hours:-10}},
    {name:"Pacific/Tahiti",utc_offset:{hours:-10}},
    {name:"US/Hawaii",utc_offset:{hours:-10}},
    {name:"Pacific/Marquesas",utc_offset:{hours:-9,minutes:-30}},
    {name:"America/Adak",utc_offset:{hours:-9}},
    {name:"America/Atka",utc_offset:{hours:-9}},
    {name:"Pacific/Gambier",utc_offset:{hours:-9}},
    {name:"US/Aleutian",utc_offset:{hours:-9}},
    {name:"America/Anchorage",utc_offset:{hours:-8}},
    {name:"America/Juneau",utc_offset:{hours:-8}},
    {name:"America/Metlakatla",utc_offset:{hours:-8}},
    {name:"America/Nome",utc_offset:{hours:-8}},
    {name:"America/Sitka",utc_offset:{hours:-8}},
    {name:"America/Yakutat",utc_offset:{hours:-8}},
    {name:"Pacific/Pitcairn",utc_offset:{hours:-8}},
    {name:"US/Alaska",utc_offset:{hours:-8}},
    {name:"America/Creston",utc_offset:{hours:-7}},
    {name:"America/Dawson",utc_offset:{hours:-7}},
    {name:"America/Dawson_Creek",utc_offset:{hours:-7}},
    {name:"America/Ensenada",utc_offset:{hours:-7}},
    {name:"America/Fort_Nelson",utc_offset:{hours:-7}},
    {name:"America/Hermosillo",utc_offset:{hours:-7}},
    {name:"America/Los_Angeles",utc_offset:{hours:-7}},
    {name:"America/Phoenix",utc_offset:{hours:-7}},
    {name:"America/Santa_Isabel",utc_offset:{hours:-7}},
    {name:"America/Tijuana",utc_offset:{hours:-7}},
    {name:"America/Vancouver",utc_offset:{hours:-7}},
    {name:"America/Whitehorse",utc_offset:{hours:-7}},
    {name:"Canada/Pacific",utc_offset:{hours:-7}},
    {name:"Canada/Yukon",utc_offset:{hours:-7}},
    {name:"Mexico/BajaNorte",utc_offset:{hours:-7}},
    {name:"MST",utc_offset:{hours:-7}},
    {name:"PST8PDT",utc_offset:{hours:-7}},
    {name:"US/Arizona",utc_offset:{hours:-7}},
    {name:"US/Pacific",utc_offset:{hours:-7}},
    {name:"America/Belize",utc_offset:{hours:-6}},
    {name:"America/Boise",utc_offset:{hours:-6}},
    {name:"America/Cambridge_Bay",utc_offset:{hours:-6}},
    {name:"America/Chihuahua",utc_offset:{hours:-6}},
    {name:"America/Costa_Rica",utc_offset:{hours:-6}},
    {name:"America/Denver",utc_offset:{hours:-6}},
    {name:"America/Edmonton",utc_offset:{hours:-6}},
    {name:"America/El_Salvador",utc_offset:{hours:-6}},
    {name:"America/Guatemala",utc_offset:{hours:-6}},
    {name:"America/Inuvik",utc_offset:{hours:-6}},
    {name:"America/Managua",utc_offset:{hours:-6}},
    {name:"America/Mazatlan",utc_offset:{hours:-6}},
    {name:"America/Ojinaga",utc_offset:{hours:-6}},
    {name:"America/Regina",utc_offset:{hours:-6}},
    {name:"America/Shiprock",utc_offset:{hours:-6}},
    {name:"America/Swift_Current",utc_offset:{hours:-6}},
    {name:"America/Tegucigalpa",utc_offset:{hours:-6}},
    {name:"America/Yellowknife",utc_offset:{hours:-6}},
    {name:"Canada/Mountain",utc_offset:{hours:-6}},
    {name:"Canada/Saskatchewan",utc_offset:{hours:-6}},
    {name:"Chile/EasterIsland",utc_offset:{hours:-6}},
    {name:"Mexico/BajaSur",utc_offset:{hours:-6}},
    {name:"MST7MDT",utc_offset:{hours:-6}},
    {name:"Navajo",utc_offset:{hours:-6}},
    {name:"Pacific/Easter",utc_offset:{hours:-6}},
    {name:"Pacific/Galapagos",utc_offset:{hours:-6}},
    {name:"US/Mountain",utc_offset:{hours:-6}},
    {name:"America/Atikokan",utc_offset:{hours:-5}},
    {name:"America/Bahia_Banderas",utc_offset:{hours:-5}},
    {name:"America/Bogota",utc_offset:{hours:-5}},
    {name:"America/Cancun",utc_offset:{hours:-5}},
    {name:"America/Cayman",utc_offset:{hours:-5}},
    {name:"America/Chicago",utc_offset:{hours:-5}},
    {name:"America/Coral_Harbour",utc_offset:{hours:-5}},
    {name:"America/Eirunepe",utc_offset:{hours:-5}},
    {name:"America/Guayaquil",utc_offset:{hours:-5}},
    {name:"America/Indiana/Knox",utc_offset:{hours:-5}},
    {name:"America/Indiana/Tell_City",utc_offset:{hours:-5}},
    {name:"America/Jamaica",utc_offset:{hours:-5}},
    {name:"America/Knox_IN",utc_offset:{hours:-5}},
    {name:"America/Lima",utc_offset:{hours:-5}},
    {name:"America/Matamoros",utc_offset:{hours:-5}},
    {name:"America/Menominee",utc_offset:{hours:-5}},
    {name:"America/Merida",utc_offset:{hours:-5}},
    {name:"America/Mexico_City",utc_offset:{hours:-5}},
    {name:"America/Monterrey",utc_offset:{hours:-5}},
    {name:"America/North_Dakota/Beulah",utc_offset:{hours:-5}},
    {name:"America/North_Dakota/Center",utc_offset:{hours:-5}},
    {name:"America/North_Dakota/New_Salem",utc_offset:{hours:-5}},
    {name:"America/Panama",utc_offset:{hours:-5}},
    {name:"America/Porto_Acre",utc_offset:{hours:-5}},
    {name:"America/Rainy_River",utc_offset:{hours:-5}},
    {name:"America/Rankin_Inlet",utc_offset:{hours:-5}},
    {name:"America/Resolute",utc_offset:{hours:-5}},
    {name:"America/Rio_Branco",utc_offset:{hours:-5}},
    {name:"America/Winnipeg",utc_offset:{hours:-5}},
    {name:"Brazil/Acre",utc_offset:{hours:-5}},
    {name:"Canada/Central",utc_offset:{hours:-5}},
    {name:"CST6CDT",utc_offset:{hours:-5}},
    {name:"EST",utc_offset:{hours:-5}},
    {name:"Jamaica",utc_offset:{hours:-5}},
    {name:"Mexico/General",utc_offset:{hours:-5}},
    {name:"US/Central",utc_offset:{hours:-5}},
    {name:"US/Indiana-Starke",utc_offset:{hours:-5}},
    {name:"America/Anguilla",utc_offset:{hours:-4}},
    {name:"America/Antigua",utc_offset:{hours:-4}},
    {name:"America/Aruba",utc_offset:{hours:-4}},
    {name:"America/Asuncion",utc_offset:{hours:-4}},
    {name:"America/Barbados",utc_offset:{hours:-4}},
    {name:"America/Blanc-Sablon",utc_offset:{hours:-4}},
    {name:"America/Boa_Vista",utc_offset:{hours:-4}},
    {name:"America/Campo_Grande",utc_offset:{hours:-4}},
    {name:"America/Caracas",utc_offset:{hours:-4}},
    {name:"America/Cuiaba",utc_offset:{hours:-4}},
    {name:"America/Curacao",utc_offset:{hours:-4}},
    {name:"America/Detroit",utc_offset:{hours:-4}},
    {name:"America/Dominica",utc_offset:{hours:-4}},
    {name:"America/Fort_Wayne",utc_offset:{hours:-4}},
    {name:"America/Grand_Turk",utc_offset:{hours:-4}},
    {name:"America/Grenada",utc_offset:{hours:-4}},
    {name:"America/Guadeloupe",utc_offset:{hours:-4}},
    {name:"America/Guyana",utc_offset:{hours:-4}},
    {name:"America/Havana",utc_offset:{hours:-4}},
    {name:"America/Indiana/Indianapolis",utc_offset:{hours:-4}},
    {name:"America/Indiana/Marengo",utc_offset:{hours:-4}},
    {name:"America/Indiana/Petersburg",utc_offset:{hours:-4}},
    {name:"America/Indiana/Vevay",utc_offset:{hours:-4}},
    {name:"America/Indiana/Vincennes",utc_offset:{hours:-4}},
    {name:"America/Indiana/Winamac",utc_offset:{hours:-4}},
    {name:"America/Indianapolis",utc_offset:{hours:-4}},
    {name:"America/Iqaluit",utc_offset:{hours:-4}},
    {name:"America/Kentucky/Louisville",utc_offset:{hours:-4}},
    {name:"America/Kentucky/Monticello",utc_offset:{hours:-4}},
    {name:"America/Kralendijk",utc_offset:{hours:-4}},
    {name:"America/La_Paz",utc_offset:{hours:-4}},
    {name:"America/Louisville",utc_offset:{hours:-4}},
    {name:"America/Lower_Princes",utc_offset:{hours:-4}},
    {name:"America/Manaus",utc_offset:{hours:-4}},
    {name:"America/Marigot",utc_offset:{hours:-4}},
    {name:"America/Martinique",utc_offset:{hours:-4}},
    {name:"America/Montreal",utc_offset:{hours:-4}},
    {name:"America/Montserrat",utc_offset:{hours:-4}},
    {name:"America/Nassau",utc_offset:{hours:-4}},
    {name:"America/New_York",utc_offset:{hours:-4}},
    {name:"America/Nipigon",utc_offset:{hours:-4}},
    {name:"America/Pangnirtung",utc_offset:{hours:-4}},
    {name:"America/Port-au-Prince",utc_offset:{hours:-4}},
    {name:"America/Port_of_Spain",utc_offset:{hours:-4}},
    {name:"America/Porto_Velho",utc_offset:{hours:-4}},
    {name:"America/Puerto_Rico",utc_offset:{hours:-4}},
    {name:"America/Santiago",utc_offset:{hours:-4}},
    {name:"America/Santo_Domingo",utc_offset:{hours:-4}},
    {name:"America/St_Barthelemy",utc_offset:{hours:-4}},
    {name:"America/St_Kitts",utc_offset:{hours:-4}},
    {name:"America/St_Lucia",utc_offset:{hours:-4}},
    {name:"America/St_Thomas",utc_offset:{hours:-4}},
    {name:"America/St_Vincent",utc_offset:{hours:-4}},
    {name:"America/Thunder_Bay",utc_offset:{hours:-4}},
    {name:"America/Toronto",utc_offset:{hours:-4}},
    {name:"America/Tortola",utc_offset:{hours:-4}},
    {name:"America/Virgin",utc_offset:{hours:-4}},
    {name:"Brazil/West",utc_offset:{hours:-4}},
    {name:"Canada/Eastern",utc_offset:{hours:-4}},
    {name:"Chile/Continental",utc_offset:{hours:-4}},
    {name:"Cuba",utc_offset:{hours:-4}},
    {name:"EST5EDT",utc_offset:{hours:-4}},
    {name:"US/East-Indiana",utc_offset:{hours:-4}},
    {name:"US/Eastern",utc_offset:{hours:-4}},
    {name:"US/Michigan",utc_offset:{hours:-4}},
    {name:"America/Araguaina",utc_offset:{hours:-3}},
    {name:"America/Argentina/Buenos_Aires",utc_offset:{hours:-3}},
    {name:"America/Argentina/Catamarca",utc_offset:{hours:-3}},
    {name:"America/Argentina/ComodRivadavia",utc_offset:{hours:-3}},
    {name:"America/Argentina/Cordoba",utc_offset:{hours:-3}},
    {name:"America/Argentina/Jujuy",utc_offset:{hours:-3}},
    {name:"America/Argentina/La_Rioja",utc_offset:{hours:-3}},
    {name:"America/Argentina/Mendoza",utc_offset:{hours:-3}},
    {name:"America/Argentina/Rio_Gallegos",utc_offset:{hours:-3}},
    {name:"America/Argentina/Salta",utc_offset:{hours:-3}},
    {name:"America/Argentina/San_Juan",utc_offset:{hours:-3}},
    {name:"America/Argentina/San_Luis",utc_offset:{hours:-3}},
    {name:"America/Argentina/Tucuman",utc_offset:{hours:-3}},
    {name:"America/Argentina/Ushuaia",utc_offset:{hours:-3}},
    {name:"America/Bahia",utc_offset:{hours:-3}},
    {name:"America/Belem",utc_offset:{hours:-3}},
    {name:"America/Buenos_Aires",utc_offset:{hours:-3}},
    {name:"America/Catamarca",utc_offset:{hours:-3}},
    {name:"America/Cayenne",utc_offset:{hours:-3}},
    {name:"America/Cordoba",utc_offset:{hours:-3}},
    {name:"America/Fortaleza",utc_offset:{hours:-3}},
    {name:"America/Glace_Bay",utc_offset:{hours:-3}},
    {name:"America/Goose_Bay",utc_offset:{hours:-3}},
    {name:"America/Halifax",utc_offset:{hours:-3}},
    {name:"America/Jujuy",utc_offset:{hours:-3}},
    {name:"America/Maceio",utc_offset:{hours:-3}},
    {name:"America/Mendoza",utc_offset:{hours:-3}},
    {name:"America/Moncton",utc_offset:{hours:-3}},
    {name:"America/Montevideo",utc_offset:{hours:-3}},
    {name:"America/Paramaribo",utc_offset:{hours:-3}},
    {name:"America/Punta_Arenas",utc_offset:{hours:-3}},
    {name:"America/Recife",utc_offset:{hours:-3}},
    {name:"America/Rosario",utc_offset:{hours:-3}},
    {name:"America/Santarem",utc_offset:{hours:-3}},
    {name:"America/Sao_Paulo",utc_offset:{hours:-3}},
    {name:"America/Thule",utc_offset:{hours:-3}},
    {name:"Antarctica/Palmer",utc_offset:{hours:-3}},
    {name:"Antarctica/Rothera",utc_offset:{hours:-3}},
    {name:"Atlantic/Bermuda",utc_offset:{hours:-3}},
    {name:"Atlantic/Stanley",utc_offset:{hours:-3}},
    {name:"Brazil/East",utc_offset:{hours:-3}},
    {name:"Canada/Atlantic",utc_offset:{hours:-3}},
    {name:"America/St_Johns",utc_offset:{hours:-2,minutes:-30}},
    {name:"Canada/Newfoundland",utc_offset:{hours:-2,minutes:-30}},
    {name:"America/Godthab",utc_offset:{hours:-2}},
    {name:"America/Miquelon",utc_offset:{hours:-2}},
    {name:"America/Noronha",utc_offset:{hours:-2}},
    {name:"Atlantic/South_Georgia",utc_offset:{hours:-2}},
    {name:"Brazil/DeNoronha",utc_offset:{hours:-2}},
    {name:"Atlantic/Cape_Verde",utc_offset:{hours:-1}},
    {name:"Africa/Abidjan",utc_offset:{}},
    {name:"Africa/Accra",utc_offset:{}},
    {name:"Africa/Bamako",utc_offset:{}},
    {name:"Africa/Banjul",utc_offset:{}},
    {name:"Africa/Bissau",utc_offset:{}},
    {name:"Africa/Conakry",utc_offset:{}},
    {name:"Africa/Dakar",utc_offset:{}},
    {name:"Africa/Freetown",utc_offset:{}},
    {name:"Africa/Lome",utc_offset:{}},
    {name:"Africa/Monrovia",utc_offset:{}},
    {name:"Africa/Nouakchott",utc_offset:{}},
    {name:"Africa/Ouagadougou",utc_offset:{}},
    {name:"Africa/Sao_Tome",utc_offset:{}},
    {name:"Africa/Timbuktu",utc_offset:{}},
    {name:"America/Danmarkshavn",utc_offset:{}},
    {name:"America/Scoresbysund",utc_offset:{}},
    {name:"Atlantic/Azores",utc_offset:{}},
    {name:"Atlantic/Reykjavik",utc_offset:{}},
    {name:"Atlantic/St_Helena",utc_offset:{}},
    {name:"Factory",utc_offset:{}},
    {name:"Greenwich",utc_offset:{}},
    {name:"Iceland",utc_offset:{}},
    {name:"UCT",utc_offset:{}},
    {name:"Universal",utc_offset:{}},
    {name:"UTC",utc_offset:{}},
    {name:"Zulu",utc_offset:{}},
    {name:"Africa/Algiers",utc_offset:{hours:1}},
    {name:"Africa/Bangui",utc_offset:{hours:1}},
    {name:"Africa/Brazzaville",utc_offset:{hours:1}},
    {name:"Africa/Casablanca",utc_offset:{hours:1}},
    {name:"Africa/Douala",utc_offset:{hours:1}},
    {name:"Africa/El_Aaiun",utc_offset:{hours:1}},
    {name:"Africa/Kinshasa",utc_offset:{hours:1}},
    {name:"Africa/Lagos",utc_offset:{hours:1}},
    {name:"Africa/Libreville",utc_offset:{hours:1}},
    {name:"Africa/Luanda",utc_offset:{hours:1}},
    {name:"Africa/Malabo",utc_offset:{hours:1}},
    {name:"Africa/Ndjamena",utc_offset:{hours:1}},
    {name:"Africa/Niamey",utc_offset:{hours:1}},
    {name:"Africa/Porto-Novo",utc_offset:{hours:1}},
    {name:"Africa/Tunis",utc_offset:{hours:1}},
    {name:"Atlantic/Canary",utc_offset:{hours:1}},
    {name:"Atlantic/Faeroe",utc_offset:{hours:1}},
    {name:"Atlantic/Faroe",utc_offset:{hours:1}},
    {name:"Atlantic/Madeira",utc_offset:{hours:1}},
    {name:"Eire",utc_offset:{hours:1}},
    {name:"Europe/Belfast",utc_offset:{hours:1}},
    {name:"Europe/Dublin",utc_offset:{hours:1}},
    {name:"Europe/Guernsey",utc_offset:{hours:1}},
    {name:"Europe/Isle_of_Man",utc_offset:{hours:1}},
    {name:"Europe/Jersey",utc_offset:{hours:1}},
    {name:"Europe/Lisbon",utc_offset:{hours:1}},
    {name:"Europe/London",utc_offset:{hours:1}},
    {name:"GB",utc_offset:{hours:1}},
    {name:"GB-Eire",utc_offset:{hours:1}},
    {name:"Portugal",utc_offset:{hours:1}},
    {name:"WET",utc_offset:{hours:1}},
    {name:"Africa/Blantyre",utc_offset:{hours:2}},
    {name:"Africa/Bujumbura",utc_offset:{hours:2}},
    {name:"Africa/Cairo",utc_offset:{hours:2}},
    {name:"Africa/Ceuta",utc_offset:{hours:2}},
    {name:"Africa/Gaborone",utc_offset:{hours:2}},
    {name:"Africa/Harare",utc_offset:{hours:2}},
    {name:"Africa/Johannesburg",utc_offset:{hours:2}},
    {name:"Africa/Khartoum",utc_offset:{hours:2}},
    {name:"Africa/Kigali",utc_offset:{hours:2}},
    {name:"Africa/Lubumbashi",utc_offset:{hours:2}},
    {name:"Africa/Lusaka",utc_offset:{hours:2}},
    {name:"Africa/Maputo",utc_offset:{hours:2}},
    {name:"Africa/Maseru",utc_offset:{hours:2}},
    {name:"Africa/Mbabane",utc_offset:{hours:2}},
    {name:"Africa/Tripoli",utc_offset:{hours:2}},
    {name:"Africa/Windhoek",utc_offset:{hours:2}},
    {name:"Antarctica/Troll",utc_offset:{hours:2}},
    {name:"Arctic/Longyearbyen",utc_offset:{hours:2}},
    {name:"Atlantic/Jan_Mayen",utc_offset:{hours:2}},
    {name:"CET",utc_offset:{hours:2}},
    {name:"Egypt",utc_offset:{hours:2}},
    {name:"Europe/Amsterdam",utc_offset:{hours:2}},
    {name:"Europe/Andorra",utc_offset:{hours:2}},
    {name:"Europe/Belgrade",utc_offset:{hours:2}},
    {name:"Europe/Berlin",utc_offset:{hours:2}},
    {name:"Europe/Bratislava",utc_offset:{hours:2}},
    {name:"Europe/Brussels",utc_offset:{hours:2}},
    {name:"Europe/Budapest",utc_offset:{hours:2}},
    {name:"Europe/Busingen",utc_offset:{hours:2}},
    {name:"Europe/Copenhagen",utc_offset:{hours:2}},
    {name:"Europe/Gibraltar",utc_offset:{hours:2}},
    {name:"Europe/Kaliningrad",utc_offset:{hours:2}},
    {name:"Europe/Ljubljana",utc_offset:{hours:2}},
    {name:"Europe/Luxembourg",utc_offset:{hours:2}},
    {name:"Europe/Madrid",utc_offset:{hours:2}},
    {name:"Europe/Malta",utc_offset:{hours:2}},
    {name:"Europe/Monaco",utc_offset:{hours:2}},
    {name:"Europe/Oslo",utc_offset:{hours:2}},
    {name:"Europe/Paris",utc_offset:{hours:2}},
    {name:"Europe/Podgorica",utc_offset:{hours:2}},
    {name:"Europe/Prague",utc_offset:{hours:2}},
    {name:"Europe/Rome",utc_offset:{hours:2}},
    {name:"Europe/San_Marino",utc_offset:{hours:2}},
    {name:"Europe/Sarajevo",utc_offset:{hours:2}},
    {name:"Europe/Skopje",utc_offset:{hours:2}},
    {name:"Europe/Stockholm",utc_offset:{hours:2}},
    {name:"Europe/Tirane",utc_offset:{hours:2}},
    {name:"Europe/Vaduz",utc_offset:{hours:2}},
    {name:"Europe/Vatican",utc_offset:{hours:2}},
    {name:"Europe/Vienna",utc_offset:{hours:2}},
    {name:"Europe/Warsaw",utc_offset:{hours:2}},
    {name:"Europe/Zagreb",utc_offset:{hours:2}},
    {name:"Europe/Zurich",utc_offset:{hours:2}},
    {name:"Libya",utc_offset:{hours:2}},
    {name:"MET",utc_offset:{hours:2}},
    {name:"Poland",utc_offset:{hours:2}},
    {name:"Africa/Addis_Ababa",utc_offset:{hours:3}},
    {name:"Africa/Asmara",utc_offset:{hours:3}},
    {name:"Africa/Asmera",utc_offset:{hours:3}},
    {name:"Africa/Dar_es_Salaam",utc_offset:{hours:3}},
    {name:"Africa/Djibouti",utc_offset:{hours:3}},
    {name:"Africa/Juba",utc_offset:{hours:3}},
    {name:"Africa/Kampala",utc_offset:{hours:3}},
    {name:"Africa/Mogadishu",utc_offset:{hours:3}},
    {name:"Africa/Nairobi",utc_offset:{hours:3}},
    {name:"Antarctica/Syowa",utc_offset:{hours:3}},
    {name:"Asia/Aden",utc_offset:{hours:3}},
    {name:"Asia/Amman",utc_offset:{hours:3}},
    {name:"Asia/Baghdad",utc_offset:{hours:3}},
    {name:"Asia/Bahrain",utc_offset:{hours:3}},
    {name:"Asia/Beirut",utc_offset:{hours:3}},
    {name:"Asia/Damascus",utc_offset:{hours:3}},
    {name:"Asia/Famagusta",utc_offset:{hours:3}},
    {name:"Asia/Gaza",utc_offset:{hours:3}},
    {name:"Asia/Hebron",utc_offset:{hours:3}},
    {name:"Asia/Istanbul",utc_offset:{hours:3}},
    {name:"Asia/Jerusalem",utc_offset:{hours:3}},
    {name:"Asia/Kuwait",utc_offset:{hours:3}},
    {name:"Asia/Nicosia",utc_offset:{hours:3}},
    {name:"Asia/Qatar",utc_offset:{hours:3}},
    {name:"Asia/Riyadh",utc_offset:{hours:3}},
    {name:"Asia/Tel_Aviv",utc_offset:{hours:3}},
    {name:"EET",utc_offset:{hours:3}},
    {name:"Europe/Athens",utc_offset:{hours:3}},
    {name:"Europe/Bucharest",utc_offset:{hours:3}},
    {name:"Europe/Chisinau",utc_offset:{hours:3}},
    {name:"Europe/Helsinki",utc_offset:{hours:3}},
    {name:"Europe/Istanbul",utc_offset:{hours:3}},
    {name:"Europe/Kiev",utc_offset:{hours:3}},
    {name:"Europe/Kirov",utc_offset:{hours:3}},
    {name:"Europe/Mariehamn",utc_offset:{hours:3}},
    {name:"Europe/Minsk",utc_offset:{hours:3}},
    {name:"Europe/Moscow",utc_offset:{hours:3}},
    {name:"Europe/Nicosia",utc_offset:{hours:3}},
    {name:"Europe/Riga",utc_offset:{hours:3}},
    {name:"Europe/Simferopol",utc_offset:{hours:3}},
    {name:"Europe/Sofia",utc_offset:{hours:3}},
    {name:"Europe/Tallinn",utc_offset:{hours:3}},
    {name:"Europe/Tiraspol",utc_offset:{hours:3}},
    {name:"Europe/Uzhgorod",utc_offset:{hours:3}},
    {name:"Europe/Vilnius",utc_offset:{hours:3}},
    {name:"Europe/Zaporozhye",utc_offset:{hours:3}},
    {name:"Indian/Antananarivo",utc_offset:{hours:3}},
    {name:"Indian/Comoro",utc_offset:{hours:3}},
    {name:"Indian/Mayotte",utc_offset:{hours:3}},
    {name:"Israel",utc_offset:{hours:3}},
    {name:"Turkey",utc_offset:{hours:3}},
    {name:"W-SU",utc_offset:{hours:3}},
    {name:"Asia/Baku",utc_offset:{hours:4}},
    {name:"Asia/Dubai",utc_offset:{hours:4}},
    {name:"Asia/Muscat",utc_offset:{hours:4}},
    {name:"Asia/Tbilisi",utc_offset:{hours:4}},
    {name:"Asia/Yerevan",utc_offset:{hours:4}},
    {name:"Europe/Astrakhan",utc_offset:{hours:4}},
    {name:"Europe/Samara",utc_offset:{hours:4}},
    {name:"Europe/Saratov",utc_offset:{hours:4}},
    {name:"Europe/Ulyanovsk",utc_offset:{hours:4}},
    {name:"Europe/Volgograd",utc_offset:{hours:4}},
    {name:"Indian/Mahe",utc_offset:{hours:4}},
    {name:"Indian/Mauritius",utc_offset:{hours:4}},
    {name:"Indian/Reunion",utc_offset:{hours:4}},
    {name:"Asia/Kabul",utc_offset:{hours:4,minutes:30}},
    {name:"Asia/Tehran",utc_offset:{hours:4,minutes:30}},
    {name:"Iran",utc_offset:{hours:4,minutes:30}},
    {name:"Antarctica/Mawson",utc_offset:{hours:5}},
    {name:"Asia/Aqtau",utc_offset:{hours:5}},
    {name:"Asia/Aqtobe",utc_offset:{hours:5}},
    {name:"Asia/Ashgabat",utc_offset:{hours:5}},
    {name:"Asia/Ashkhabad",utc_offset:{hours:5}},
    {name:"Asia/Atyrau",utc_offset:{hours:5}},
    {name:"Asia/Dushanbe",utc_offset:{hours:5}},
    {name:"Asia/Karachi",utc_offset:{hours:5}},
    {name:"Asia/Oral",utc_offset:{hours:5}},
    {name:"Asia/Qyzylorda",utc_offset:{hours:5}},
    {name:"Asia/Samarkand",utc_offset:{hours:5}},
    {name:"Asia/Tashkent",utc_offset:{hours:5}},
    {name:"Asia/Yekaterinburg",utc_offset:{hours:5}},
    {name:"Indian/Kerguelen",utc_offset:{hours:5}},
    {name:"Indian/Maldives",utc_offset:{hours:5}},
    {name:"Asia/Calcutta",utc_offset:{hours:5,minutes:30}},
    {name:"Asia/Colombo",utc_offset:{hours:5,minutes:30}},
    {name:"Asia/Kolkata",utc_offset:{hours:5,minutes:30}},
    {name:"Asia/Kathmandu",utc_offset:{hours:5,minutes:45}},
    {name:"Asia/Katmandu",utc_offset:{hours:5,minutes:45}},
    {name:"Antarctica/Vostok",utc_offset:{hours:6}},
    {name:"Asia/Almaty",utc_offset:{hours:6}},
    {name:"Asia/Bishkek",utc_offset:{hours:6}},
    {name:"Asia/Dacca",utc_offset:{hours:6}},
    {name:"Asia/Dhaka",utc_offset:{hours:6}},
    {name:"Asia/Kashgar",utc_offset:{hours:6}},
    {name:"Asia/Omsk",utc_offset:{hours:6}},
    {name:"Asia/Qostanay",utc_offset:{hours:6}},
    {name:"Asia/Thimbu",utc_offset:{hours:6}},
    {name:"Asia/Thimphu",utc_offset:{hours:6}},
    {name:"Asia/Urumqi",utc_offset:{hours:6}},
    {name:"Indian/Chagos",utc_offset:{hours:6}},
    {name:"Asia/Rangoon",utc_offset:{hours:6,minutes:30}},
    {name:"Asia/Yangon",utc_offset:{hours:6,minutes:30}},
    {name:"Indian/Cocos",utc_offset:{hours:6,minutes:30}},
    {name:"Antarctica/Davis",utc_offset:{hours:7}},
    {name:"Asia/Bangkok",utc_offset:{hours:7}},
    {name:"Asia/Barnaul",utc_offset:{hours:7}},
    {name:"Asia/Ho_Chi_Minh",utc_offset:{hours:7}},
    {name:"Asia/Hovd",utc_offset:{hours:7}},
    {name:"Asia/Jakarta",utc_offset:{hours:7}},
    {name:"Asia/Krasnoyarsk",utc_offset:{hours:7}},
    {name:"Asia/Novokuznetsk",utc_offset:{hours:7}},
    {name:"Asia/Novosibirsk",utc_offset:{hours:7}},
    {name:"Asia/Phnom_Penh",utc_offset:{hours:7}},
    {name:"Asia/Pontianak",utc_offset:{hours:7}},
    {name:"Asia/Saigon",utc_offset:{hours:7}},
    {name:"Asia/Tomsk",utc_offset:{hours:7}},
    {name:"Asia/Vientiane",utc_offset:{hours:7}},
    {name:"Indian/Christmas",utc_offset:{hours:7}},
    {name:"Antarctica/Casey",utc_offset:{hours:8}},
    {name:"Asia/Brunei",utc_offset:{hours:8}},
    {name:"Asia/Choibalsan",utc_offset:{hours:8}},
    {name:"Asia/Chongqing",utc_offset:{hours:8}},
    {name:"Asia/Chungking",utc_offset:{hours:8}},
    {name:"Asia/Harbin",utc_offset:{hours:8}},
    {name:"Asia/Hong_Kong",utc_offset:{hours:8}},
    {name:"Asia/Irkutsk",utc_offset:{hours:8}},
    {name:"Asia/Kuala_Lumpur",utc_offset:{hours:8}},
    {name:"Asia/Kuching",utc_offset:{hours:8}},
    {name:"Asia/Macao",utc_offset:{hours:8}},
    {name:"Asia/Macau",utc_offset:{hours:8}},
    {name:"Asia/Makassar",utc_offset:{hours:8}},
    {name:"Asia/Manila",utc_offset:{hours:8}},
    {name:"Asia/Shanghai",utc_offset:{hours:8}},
    {name:"Asia/Singapore",utc_offset:{hours:8}},
    {name:"Asia/Taipei",utc_offset:{hours:8}},
    {name:"Asia/Ujung_Pandang",utc_offset:{hours:8}},
    {name:"Asia/Ulaanbaatar",utc_offset:{hours:8}},
    {name:"Asia/Ulan_Bator",utc_offset:{hours:8}},
    {name:"Australia/Perth",utc_offset:{hours:8}},
    {name:"Australia/West",utc_offset:{hours:8}},
    {name:"Hongkong",utc_offset:{hours:8}},
    {name:"PRC",utc_offset:{hours:8}},
    {name:"ROC",utc_offset:{hours:8}},
    {name:"Singapore",utc_offset:{hours:8}},
    {name:"Australia/Eucla",utc_offset:{hours:8,minutes:45}},
    {name:"Asia/Chita",utc_offset:{hours:9}},
    {name:"Asia/Dili",utc_offset:{hours:9}},
    {name:"Asia/Jayapura",utc_offset:{hours:9}},
    {name:"Asia/Khandyga",utc_offset:{hours:9}},
    {name:"Asia/Pyongyang",utc_offset:{hours:9}},
    {name:"Asia/Seoul",utc_offset:{hours:9}},
    {name:"Asia/Tokyo",utc_offset:{hours:9}},
    {name:"Asia/Yakutsk",utc_offset:{hours:9}},
    {name:"Japan",utc_offset:{hours:9}},
    {name:"Pacific/Palau",utc_offset:{hours:9}},
    {name:"ROK",utc_offset:{hours:9}},
    {name:"Australia/Adelaide",utc_offset:{hours:9,minutes:30}},
    {name:"Australia/Broken_Hill",utc_offset:{hours:9,minutes:30}},
    {name:"Australia/Darwin",utc_offset:{hours:9,minutes:30}},
    {name:"Australia/North",utc_offset:{hours:9,minutes:30}},
    {name:"Australia/South",utc_offset:{hours:9,minutes:30}},
    {name:"Australia/Yancowinna",utc_offset:{hours:9,minutes:30}},
    {name:"Antarctica/DumontDUrville",utc_offset:{hours:10}},
    {name:"Asia/Ust-Nera",utc_offset:{hours:10}},
    {name:"Asia/Vladivostok",utc_offset:{hours:10}},
    {name:"Australia/ACT",utc_offset:{hours:10}},
    {name:"Australia/Brisbane",utc_offset:{hours:10}},
    {name:"Australia/Canberra",utc_offset:{hours:10}},
    {name:"Australia/Currie",utc_offset:{hours:10}},
    {name:"Australia/Hobart",utc_offset:{hours:10}},
    {name:"Australia/Lindeman",utc_offset:{hours:10}},
    {name:"Australia/Melbourne",utc_offset:{hours:10}},
    {name:"Australia/NSW",utc_offset:{hours:10}},
    {name:"Australia/Queensland",utc_offset:{hours:10}},
    {name:"Australia/Sydney",utc_offset:{hours:10}},
    {name:"Australia/Tasmania",utc_offset:{hours:10}},
    {name:"Australia/Victoria",utc_offset:{hours:10}},
    {name:"Pacific/Chuuk",utc_offset:{hours:10}},
    {name:"Pacific/Guam",utc_offset:{hours:10}},
    {name:"Pacific/Port_Moresby",utc_offset:{hours:10}},
    {name:"Pacific/Saipan",utc_offset:{hours:10}},
    {name:"Pacific/Truk",utc_offset:{hours:10}},
    {name:"Pacific/Yap",utc_offset:{hours:10}},
    {name:"Australia/LHI",utc_offset:{hours:10,minutes:30}},
    {name:"Australia/Lord_Howe",utc_offset:{hours:10,minutes:30}},
    {name:"Antarctica/Macquarie",utc_offset:{hours:11}},
    {name:"Asia/Magadan",utc_offset:{hours:11}},
    {name:"Asia/Sakhalin",utc_offset:{hours:11}},
    {name:"Asia/Srednekolymsk",utc_offset:{hours:11}},
    {name:"Pacific/Bougainville",utc_offset:{hours:11}},
    {name:"Pacific/Efate",utc_offset:{hours:11}},
    {name:"Pacific/Guadalcanal",utc_offset:{hours:11}},
    {name:"Pacific/Kosrae",utc_offset:{hours:11}},
    {name:"Pacific/Norfolk",utc_offset:{hours:11}},
    {name:"Pacific/Noumea",utc_offset:{hours:11}},
    {name:"Pacific/Pohnpei",utc_offset:{hours:11}},
    {name:"Pacific/Ponape",utc_offset:{hours:11}},
    {name:"Antarctica/McMurdo",utc_offset:{hours:12}},
    {name:"Antarctica/South_Pole",utc_offset:{hours:12}},
    {name:"Asia/Anadyr",utc_offset:{hours:12}},
    {name:"Asia/Kamchatka",utc_offset:{hours:12}},
    {name:"Kwajalein",utc_offset:{hours:12}},
    {name:"NZ",utc_offset:{hours:12}},
    {name:"Pacific/Auckland",utc_offset:{hours:12}},
    {name:"Pacific/Fiji",utc_offset:{hours:12}},
    {name:"Pacific/Funafuti",utc_offset:{hours:12}},
    {name:"Pacific/Kwajalein",utc_offset:{hours:12}},
    {name:"Pacific/Majuro",utc_offset:{hours:12}},
    {name:"Pacific/Nauru",utc_offset:{hours:12}},
    {name:"Pacific/Tarawa",utc_offset:{hours:12}},
    {name:"Pacific/Wake",utc_offset:{hours:12}},
    {name:"Pacific/Wallis",utc_offset:{hours:12}},
    {name:"NZ-CHAT",utc_offset:{hours:12,minutes:45}},
    {name:"Pacific/Chatham",utc_offset:{hours:12,minutes:45}},
    {name:"Pacific/Apia",utc_offset:{hours:13}},
    {name:"Pacific/Enderbury",utc_offset:{hours:13}},
    {name:"Pacific/Fakaofo",utc_offset:{hours:13}},
    {name:"Pacific/Tongatapu",utc_offset:{hours:13}},
    {name:"Pacific/Kiritimati",utc_offset:{hours:14}},
]
