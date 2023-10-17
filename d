/* const points = {};

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
      points[username] = (points[username] || 0) + amount;
      client.say(channel, `@${username} recebeu ${amount} pontos!`);
    }
  }

  // Comando para subtrair pontos manualmente
  if ((isModerator || isBroadcaster) && message.toLowerCase().startsWith('!subpontos')) {
    const splitMessage = message.split(' ');
    const username = splitMessage[1];
    const amount = parseInt(splitMessage[2]);

    if (!isNaN(amount)) {
      points[username] = Math.max((points[username] || 0) - amount, 0);
      client.say(channel, `@${username} perdeu ${amount} pontos!`);
    }
  }

  // Comando para checar pontos
  if (message.toLowerCase() === '!pontos') {
    const username = tags.username;
    const userPoints = points[username] || 0;
    client.say(channel, `@${username}, você tem ${userPoints} pontos!`);
  }
}); */


