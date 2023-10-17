//Pacotes npm baixados
const tmi = require('tmi.js'),
  { channel, username, password } = require('./settings.json');

/*criação do objetO "opções", onde será armazenaremos a configuração para a 
conexão com o servidor de chat da twitch */

const options = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true

  },
  // identity é aonde se coloca o nome de usuario e senha do bot
  identity: {
    username,
    password

    //aqui é aonde forneceremos o canal que especificamos em nosso "settings.json"
  },
  channels: [channel]

};

//criação do cliente para se conectar aos servidores da twitch
//o "catch(console.error)" é usado para demostrar no terminal se houver um erro
const client = new tmi.Client(options);
client.connect().catch(console.error);

//criação das mensagens de entrada
client.on('connected', () => {
  client.say(channel, 'A janta está pronta, A janta está pronta!!!');

});

//criando o evento de mensagem, que se acionará após alguem digitar o comando

client.on('message', (channel, user, message, self) => {
  if (self) return;

  //salve

  if (message == '!salve') {
    client.say(channel, `@${user.username}, salve meu bom`);


  }

  //street ganha do fighter
  if (message == '!street') {
    client.say(channel, `@${user.username}, street ganha do fighetr mas fighter ganha do 6`);

  }


  //dados

  if (message == '!roll') {
    client.say(channel, `@${user.username} seu número é ${Math.floor(Math.random() * 6) + 1}!`);

  }

  //ping pong

  if (message == 'ping') {
    client.say(channel, `@${user.username}, pong`);


  }

  //rafael

  if (message == '@Rafael3790') {
    client.say(channel, `@${user.username}, Você quis dizer... a mais linda da twitch?`);



  }

  //Frame data da Marisa

  if (message == '!marisa') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Marisa: https://wiki.supercombo.gg/w/Street_Fighter_6/Marisa `);

  }

  //Frame data da Aki

  if (message == '!aki') {
    client.say(channel, `@${user.username}, Site para o Frame Data da A.K.I: https://wiki.supercombo.gg/w/Street_Fighter_6/A.K.I. `);

  }

  //Frame data do Blanka

  if (message == '!blanka') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Blanka: https://wiki.supercombo.gg/w/Street_Fighter_6/Blanka `);

  }


  //Frame data do Ken

  if (message == '!ken') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Ken: https://wiki.supercombo.gg/w/Street_Fighter_6/Ken `);

  }


  //Frame data da kimberly


  if (message == '!kimberly') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Kimberly: https://wiki.supercombo.gg/w/Street_Fighter_6/Kimberly `);

  }

  //Frame data da Cammy

  if (message == '!cammy') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Cammy: https://wiki.supercombo.gg/w/Street_Fighter_6/Cammy `);

  }


  //Frame data da Chun-Li


  if (message == '!chunli') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Chun-Li: https://wiki.supercombo.gg/w/Street_Fighter_6/Chun-Li `);

  }

  //Frame data da Lily

  if (message == '!lily') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Lily: https://wiki.supercombo.gg/w/Street_Fighter_6/Lily `);

  }


  //Frame data do Luke

  if (message == '!luke') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Luke: https://wiki.supercombo.gg/w/Street_Fighter_6/Luke `);

  }


  //Frame data do Dee Jay


  if (message == '!deejay') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Dee Jay: https://wiki.supercombo.gg/w/Street_Fighter_6/Dee_Jay `);

  }

  //Frame data do Dhalsim


  if (message == '!dhalsim') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Dhalsim: https://wiki.supercombo.gg/w/Street_Fighter_6/Dhalsim `);

  }

  //Frame data da Manon

  if (message == '!manon') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Manon: https://wiki.supercombo.gg/w/Street_Fighter_6/Manon `);

  }


  //Frame data do Honda

  if (message == '!honda') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Honda: https://wiki.supercombo.gg/w/Street_Fighter_6/Honda `);

  }

  //Frame data do Guile

  if (message == '!guile') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Guile: https://wiki.supercombo.gg/w/Street_Fighter_6/Guile `);

  }

  //Frame data do Rashid

  if (message == '!rashid') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Rashid: https://wiki.supercombo.gg/w/Street_Fighter_6/Rashid `);

  }

  //Frame data do Ryu

  if (message == '!ryu') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Ryu: https://wiki.supercombo.gg/w/Street_Fighter_6/Ryu `);

  }


  //Frame data do Honda

  if (message == '!honda') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Honda: https://wiki.supercombo.gg/w/Street_Fighter_6/Honda `);

  }


  //Frame data do Jamie

  if (message == '!jamie') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Jamie: https://wiki.supercombo.gg/w/Street_Fighter_6/Jamie `);

  }


  //Frame data do JP

  if (message == '!jp') {
    client.say(channel, `@${user.username}, Site para o Frame Data do JP: https://wiki.supercombo.gg/w/Street_Fighter_6/JP `);

  }



  //Frame data do Zangief

  if (message == '!zangief') {
    client.say(channel, `@${user.username}, Site para o Frame Data do Zangief: https://wiki.supercombo.gg/w/Street_Fighter_6/Zangief `);

  }

  //Frame data da Juri

  if (message == '!Juri') {
    client.say(channel, `@${user.username}, Site para o Frame Data da Juri: https://wiki.supercombo.gg/w/Street_Fighter_6/Juri `);

  }

  //Frame data

  if (message == '!framedata') {
    client.say(channel, `@${user.username}, Site para o Frame Data: https://wiki.supercombo.gg/w/Street_Fighter_6 `);

  }






  //Help


  if (message == '!help') {
    client.say(channel, `@${user.username}, https://carlinosbot.my.canva.site/ `);

  }

  //cavalos

  if (message == '!cavalos') {
    client.say(channel, `@${user.username} eu dou a bunda pra varios homens, 2050 homens ejaculando na minha boca, 250 homens mijando na minha boca, ai cleide, cleide, o povo n quer saber de cartucho de carabina, o povo quer gozar na minha bunda, 2050 eleitores do PT comeram a minha bunda e gozaram dentro, vou bater o record mundial em dar a bunda, vou bater o record mundial em chupar homens, vou bater o record mundial em chupar cavalos, chupar cavalos e homens`);

  }

  //Elden Bling

  if (message == '!F') {
    client.say(channel, `@${user.username}, F Elden Bling `);


    //reboco

    if (message == '!reboco') {
      client.say(channel, `@${user.username},   Receita de reboco. Misture quatro carrinhos de areia fina com um saco de cimento e dois sacos de cal. Adicione água, misturando até ter uma massa homogénea. Com uma colher de pedreiro, jogue a massa na parede, espere a massa “puxar” e faça o corte da massa com uma régua de pedreiro, deixando uma camada uniforme sobre a parede. Com auxílio de uma broxa e de uma desempenadeira, tira as imperfeições da massa. Por fim use um bloco de espuma úmido para dar o acabamento final.`);

    }

    // james

    if (message == '!james') {
      client.say(channel, `@${user.username},OH JAMES EU QUERO UMA SALADA DE FRUTAS, OLHA QUE HABILIDADE OLHA QUE HABILIDADE  EU QUERO UMA SALADA  DE FRUTA JAMESNO CAPRICHO DE 5  DE 7 DE 10, ME DA UMA DE 5, AQUI TÁ NA MÃO TA AQUI IIIIISSO JAMES  MUITO OBRIGADO  BRIGADO  DEUS ABENÇOE  ESSE É O JAMES  HÃ???  DA SALADA DE FRUTAS  O ARTISTA DE CIRCO `);

    }

  }

   //Nightbot


   if (message == '!M') {
    client.say(channel, `@${user.username},vai se fuder o night bot já faz isso, pede pra ele`);
    client.say(channel, `!parm`);

  }


  //randomizador de nomes

  if (message.toLowerCase() === '!randomnome') {
    const nomes = ['Nego do Bordel', 'Ryu Indiano', 'Amante da Beiçola', 'Tommy Vercetti das Arabias', 'Fã N°1 do Xamuel']; // Insira os nomes que você deseja randomizar
    const randomIndex = Math.floor(Math.random() * nomes.length);
    const randomNome = nomes[randomIndex];
    client.say(channel, `Toddyyz Streamer Streams, ou para os mais intimos ${randomNome}`);


  }

  //sorte

  if (message.toLowerCase() === '!sorte') {
    const chance = 0.01; // Defina a porcentagem desejada aqui (por exemplo, 50%)
    const random = Math.random();

    if (random < chance) {
      client.say(channel, `Parabéns, @${user.username}! Caiu Cara`);
      client.say(channel, `!addpontos @${user.username} 100 `)
    } else {
      client.say(channel, `Desculpe, @${user.username}, Caiu Coroa.`);
    }
  }


});

//amor

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  if (message.toLowerCase().startsWith('!amor')) {
    const users = message.toLowerCase().split('!amor ')[1].split(' e ');
    const lovePercentage = Math.floor(Math.random() * 101);
    const response = `A porcentagem de amor entre ${users[0]} e ${users[1]} é de ${lovePercentage}%! ❤️`;

    client.say(channel, response);
  }


});

//pontos


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Use um arquivo em vez de ':memory:' para armazenar persistentemente

// Cria a tabela se ela não existir
db.serialize(() => {
  db.run('CREATE TABLE if not exists points (username TEXT, points INTEGER)');
});

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  // Verificar se o remetente é moderador ou o streamer
  const isModerator = tags['user-type'] === 'mod';
  const isBroadcaster = channel.slice(1) === tags.username;

  // Comando para adicionar pontos manualmente
  if ((isModerator || isBroadcaster) && message.toLowerCase().startsWith('!addpontos')) {
    const splitMessage = message.split(' ');
    const username = splitMessage[1];
    const amount = parseInt(splitMessage[2]);

    if (!isNaN(amount)) {
      db.get('SELECT * FROM points WHERE username = ?', username, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        if (row) {
          const currentPoints = row.points + amount;
          db.run('UPDATE points SET points = ? WHERE username = ?', currentPoints, username);
        } else {
          db.run('INSERT INTO points (username, points) VALUES (?, ?)', username, amount);
        }
        client.say(channel, `@${username} recebeu ${amount} pontos!`);
      });
    }
  }

  // Comando para subtrair pontos manualmente
  if ((isModerator || isBroadcaster) && message.toLowerCase().startsWith('!subpontos')) {
    const splitMessage = message.split(' ');
    const username = splitMessage[1];
    const amount = parseInt(splitMessage[2]);

    if (!isNaN(amount)) {
      db.get('SELECT * FROM points WHERE username = ?', username, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        if (row) {
          const currentPoints = Math.max(row.points - amount, 0);
          db.run('UPDATE points SET points = ? WHERE username = ?', currentPoints, username);
        } else {
          db.run('INSERT INTO points (username, points) VALUES (?, ?)', username, 0);
        }
        client.say(channel, `@${username} perdeu ${amount} pontos!`);
      });
    }
  }

  // Comando para checar pontos
  if (message.toLowerCase() === '!pontos') {
    const username = tags.username;
    db.get('SELECT * FROM points WHERE username = ?', username, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      const userPoints = row ? row.points : 0;
      client.say(channel, `@${username}, você tem ${userPoints} pontos!`);
    });
  }
});
