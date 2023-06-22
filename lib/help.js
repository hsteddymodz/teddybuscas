const fs = require('fs')
const lx = "```"
const config = JSON.parse(fs.readFileSync(`./src/config.json`))

exports.start = async(lxrd, name) => {
    text = `𝘾𝙊𝙈𝙋𝙍𝙀 𝙅𝘼 𝙊 𝙎𝙀𝙐 𝘼𝘾𝙀𝙎𝙎𝙊 𝘼𝙊 𝙉𝙊𝙎𝙎𝙊 𝘽𝙊𝙏

🔍 ⚡️ 「𝐻𝑎𝑣𝑖𝑡𝑦 𝑆𝑒𝑎𝑟𝑐ℎ」 ⚡️ 🔎
━━━━━━━━━━━━━━━━━
𝙊 𝘽𝙊𝙏 𝙏𝙀𝙈:

✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝘾𝙋𝙁
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝘾𝙉𝙋𝙅
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝙉𝙐𝙈𝙀𝙍𝙊
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝙉𝙊𝙈𝙀
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝙋𝙇𝘼𝘾𝘼
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝗗𝗗𝗗
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝗕𝗔𝗡𝗖𝗢
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝗜𝗣
✅ 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼 𝘿𝙀 𝗦𝗖𝗢𝗥𝗘

━━━━━━━━━━━━━━━━━
⚠️ 𝙍𝙀𝙏𝙊𝙍𝙉𝘼 𝙏𝙊𝘿𝙊𝙎 𝙊𝙎 𝘿𝘼𝘿𝙊𝙎 ⚠️

🚨 𝙐𝙎𝙊 𝙄𝙇𝙄𝙈𝙄𝙏𝘼𝘿𝙊 PV 𝘿𝙊 𝘽𝙊𝙏 🚨
━━━━━━━━━━━━━━━━━
𝙑𝘼𝙇𝙊𝙍𝙀𝙎:
• 1 𝙎𝙀𝙈𝘼𝙉𝘼 = R$12
• 2 𝙎𝙀𝙈𝘼𝙉𝘼𝙎 = R$24
• 1 MÊS = R$35

𝙋𝘼𝙍𝘼 𝙎𝙀𝙐 𝙂𝙍𝙐𝙋𝙊:
• 15 𝘿𝙄𝘼𝙎 = R$40
• 31 𝘿𝙄𝘼𝙎 = R$60

━━━━━━━━━━━━━━━━━
💲 𝙁𝙊𝙍𝙈𝘼𝙎 𝘿𝙀 𝙋𝘼𝙂𝘼𝙈𝙀𝙉𝙏𝙊𝙎 💲

✅ 𝙋𝙞𝙭
✅ 𝘽𝙤𝙡𝙚𝙩𝙤
✅ 𝙇𝙤𝙩𝙚𝙧𝙞𝙘𝙖
✅ 𝙏𝙚𝙙

  [Contratar](${config.ownerLink}).
    `
    await lxrd.replyWithMarkdown(text, { disable_web_page_preview: true })
}


exports.help = async(lxrd, name, user_id) => {
    text = `✅ MENU DE COMANDOS

Escolha uma das opções a baixo e clique no botão correspondente.`
    options = {
        reply_markup: {
            inline_keyboard: [

                [
                    { text: '🔎CONSULTA VIP🔎', callback_data: 'consultas-' },
                 ],
                 [
                    { text: '🕵🏼‍♂️CONSULTA FREE🕵🏼‍♂️', callback_data: 'consultasfree-' },
                 ],
                [ 
                { text: 'Grupo no whatsapp', url: 'https://chat.whatsapp.com/Ik6BDpBYuID7VNREDBeTiO' },
                ],
                                [
                { text: 'Canal de atualizações do BOT', url: 'https://t.me/havitysearch' },
                ],
                                 [
                { text: 'Comprar - apis consulta', url: 'https://t.me/teddyzinofc' },
                ],
            
             
              
               
                
                 
                  
                
                 
                  ]
            
            
            
        }
    }
    try {
        await lxrd.editMessageText(text, options)
    } catch {
        await lxrd.reply(text, options)
    }
}
exports.store = async(lxrd, user_id, name) => {
    prefix = config.prefix
    text = `Olá ${full_name}, Seja bem vindo!

[❓ Dúvidas](https://t.me/havitysearch)
[👥 Grupo](https://t.me/havityconsultas)
[⚙️ Dev](${config.ownerLink})

Clique em dúvidas para consultar nosso canal de dicas, ou clique aqui

Boas compras!
`
await lxrd.replyWithMarkdown(text, {
        reply_markup: {
            inline_keyboard: [
            [
                    { text: '💳 Comprar', callback_data: 'help-' + user_id },
                    { text: '💵 Adicionar Saldo', callback_data: 'help-' + user_id },
                    
                ],
                [
                { text: '👤 Informações', callback_data: 'info-' + user_id },
                ],
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
    
}

exports.info = async(lxrd, user_id, name) => {
    prefix = config.prefix
    text = `👤 *Perfil*
- *Nome:* ${lx}${full_name}${lx}
- *Id:* ${lx}${user_id}${lx}

💰 *Carteira*
- *Saldo:* ${lx}R$0${lx}
- *Compras:* ${lx}0${lx}
`
await lxrd.replyWithMarkdown(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'store-' + user_id }
                ]
            ]
        }
    })
    
}



exports.consultas = async(lxrd, user_id) => {
    text = `━━━━━━━━━━━━━━━━━━━━━

🔍  𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼  🔍

━━━━━━━━━━━━━━━━━━━━━`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Consulta CPF️', callback_data: 'cpf-' + user_id },
                    { text: 'Consulta Nome', callback_data: 'nome-' + user_id }
                ],
                [
                    { text: 'Consulta telefone', callback_data: 'telefone-' + user_id },

                ],
                [
                    { text: 'Consulta CNPJ', callback_data: 'cnpj-' + user_id },
                    { text: 'Consulta Placa', callback_data: 'placa-' + user_id },
                ],
                [
                    { text: 'CEP', callback_data: 'cep-' + user_id },
                    
                ],
            
            [
            
            { text: 'Consulta SCORE️', callback_data: 'score-' + user_id },
            
            ],
             
              [
                    { text: '🔙  𝗠𝗘𝗡𝗨  🔙', callback_data: 'help-' + user_id }
                ]
               
                
                 
                  
                
                 
                  ]
            
            
            
        }
    }
    try {
        await lxrd.editMessageText(text, options)
    } catch {
        await lxrd.reply(text, options)
    }
}

exports.consultasfree = async(lxrd, user_id) => {
    text = `━━━━━━━━━━━━━━━━━━━━━

🔍  𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼  🔍

━━━━━━━━━━━━━━━━━━━━━`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Consulta bin', callback_data: 'bin-' + user_id },
                    { text: 'Consulta Banco', callback_data: 'banco-' + user_id }
                ],
                [
                    { text: 'Consulta Ip', callback_data: 'ip-' + user_id },

                ],
                [
                    { text: 'Consulta ddd', callback_data: 'ddd-' + user_id },
                ],
                [
                    { text: 'CEP', callback_data: 'cep-' + user_id },
                    
                ],
            
            [
            
            { text: 'Consulta SCORE️', callback_data: 'score-' + user_id },
            
            ],
             
              [
                    { text: '🔙  𝗠𝗘𝗡𝗨  🔙', callback_data: 'help-' + user_id }
                ]
               
                
                 
                  
                
                 
                  ]
            
            
            
        }
    }
    try {
        await lxrd.editMessageText(text, options)
    } catch {
        await lxrd.reply(text, options)
    }
    }

exports.score = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗦𝗖𝗢𝗥𝗘

━━━━━━━━━━━━━━━━━━━━━
Consulta completa de Score, retorna renda da pessoa

Formato:
11978534728

${prefix}score 11978534728

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultas-' + user_id }
                ]
            ]
        }
    })
}

exports.bin = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗕𝗜𝗡

━━━━━━━━━━━━━━━━━━━━━
Consulta completa de bin, retorna dados do bin

Formato:
520586

${prefix}bin 520586

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.banco = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗕𝗔𝗡𝗖𝗢

━━━━━━━━━━━━━━━━━━━━━
Consulta de Simples de Banco, Retorna os dados do banco

Formato:
33

${prefix}banco 33

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.ddd = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗗𝗗

━━━━━━━━━━━━━━━━━━━━━
Consulta de DDD, retorna todas as cidades do ddd

Formato:
81

${prefix}ddd 81

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}



exports.cpf = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗣𝗙 

━━━━━━━━━━━━━━━━━━━━━
Consulta simples de CPF, retorna os dados do portador.

Formato:
01441452001
ou
014.414.520-01

${prefix}cpf1 01441452001
${prefix}cpf2 01441452001
${prefix}cpf3 01441452001

━━━━━━━━━━━━━━━━━━━━━
`
 await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultas-' + user_id }
                ]
            ]
        }
    })
}

exports.nome = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗡𝗢𝗠𝗘

━━━━━━━━━━━━━━━━━━━━━
Consulta simples de nome, retorna o número do CPF do portador.

Formato:
CARINA ALVES MAIESKY
ou
Carina Alves Maiesky

${prefix}nome CARINA ALVES MAIESKY
${prefix}nome2 CARINA ALVES MAIESKY

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultas-' + user_id }
                ]
            ]
        }
    })
}




exports.cep = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗘𝗣

━━━━━━━━━━━━━━━━━━━━━
Consulta de CEP, obtém informações sobre os logradouros (como nome de rua, avenida, alameda, beco, travessa, praça etc), nome de bairro, cidade e estado onde ele está localizado.

Formato:
70040010
ou
70040-010

${prefix}cep 70040010

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultasfree-' + user_id }
                ]
            ]
        }
    })
}

exports.placa = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗣𝗟𝗔𝗖𝗔

━━━━━━━━━━━━━━━━━━━━━
 Consulta completa de Placa, retorna informações sobre o veículo.

Formato:
OGT0458
ou
OGT-0458

${prefix}placa OGT0458

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultas-' + user_id }
                ]
            ]
        }
    })
}

exports.cnpj = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗡𝗣𝗝

━━━━━━━━━━━━━━━━━━━━━
Consulta completa de CNPJ, retorna todos os dados da empresa e nome do(s) proprietário(s) e sócio(s).

Formato:
27865757000102
ou
27.865.757/0001-02

${prefix}cnpj 27865757000102

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultas-' + user_id }
                ]
            ]
        }
    })
}

exports.telefone = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘

━━━━━━━━━━━━━━━━━━━━━
Consulta completa de Número de Telefone, retorna todos os dados do dono do Telefone.

Formato:
51995379721
ou
5199537-9721

${prefix}tel1 51995379721
${prefix}tel2 51995379721
${prefix}tel3 51995379721
${prefix}tel4 51995379721

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultas-' + user_id }
                ]
            ]
        }
    })
}


exports.ip = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗜𝗣

━━━━━━━━━━━━━━━━━━━━━
Consulta o número de IP, obtém dados do IP, como qual é o provedor, ip reverso, país, estado, cidade e as coordenadas de onde ele está localizado.

Formato:
204.152.203.157

${prefix}ip 204.152.203.157

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultasfree-' + user_id }
                ]
            ]
        }
    })
}


exports.site = async(lxrd, user_id) => {
    prefix = config.prefix
    text = `☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗦𝗜𝗧𝗘

━━━━━━━━━━━━━━━━━━━━━
Consulta a url de um SITE, obtém dados do site, como qual é o ip, ip reverso, provedor, país, estado, cidade e as coordenadas de onde ele está localizado.

Formato:
http://google.com
ou
google.com

${prefix}site google.com

━━━━━━━━━━━━━━━━━━━━━
`
    await lxrd.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Voltar 🔙', callback_data: 'consultas-' + user_id }
                ]
            ]
        }
    })
}

exports.messageError = async(lxrd) => {
    await lxrd.reply(`Erro! Por favor, relate ao [${config.owner}](${config.ownerLink}) sobre isso`, { parse_mode: "Markdown", disable_web_page_preview: true })
  }
  