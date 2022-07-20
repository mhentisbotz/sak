let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.ibb.co/BzR1jRq/08a088fe953b.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "YT : MikAzu https://is.gd/4ZPpIt",
        "description": `
┌「 *Sewa bot* 」
│     
├ 2 Grup /Permanen
├ Rp. 10,000 Dana
├ Rp. 15,000 Pulsa Indosat
│
├ 1 Premium / 30 Hari
├ Rp. 5,000 Dana
├ Rp. 10,000 Pulsa Indosat
│
├ tertarik? hubungi: 
├ @6281946945315 (YT : MikAzu 929)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6288217277973@s.whatsapp.net"
        },
        "footerText": "https://is.gd/4ZPpIt"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
