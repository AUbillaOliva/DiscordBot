const ping = async (msg) => {
  var message = await msg.channel.send('BRIGIDOOOOO');
  message.delete();
  var ping = Math.floor(message.createdAt - msg.createdAt);
  if (ping > 400) {
    msg.channel.send(
      `Hermanito mio llevame pa la casa \:skull_and_crossbones: \`[${ping}]\``
    );
  } else if (ping < 400 && ping > 300) {
    msg.channel.send(
      `Su ping esta maomeno nomas mi rey \:pensive: \:ok_hand: \`[${ping}]\``
    );
  } else if (ping < 300) {
    msg.channel.send(`Su ping esta de pana mi rey \:ok_hand: \`[${ping}]\``);
  }
};

module.exports = ping;