import { DataAccess } from '../../../../../libs/data-access/src';

export default async function remove(command, msg, dataAccess: DataAccess) {
  const serverId = msg.guild.id;
  const channelId = msg.channel.id;
  const channelName = msg.channel.name;
  let text;

  switch (command.params[0]) {
    case 'all':
      text = `Удалены все оповещения со всех каналов на сервере`;
      await dataAccess.subscriptionRemoveList(serverId);
      break;
    case 'channel':
      text = `Удалены все оповещения с текущего канала #${channelName}`;
      await dataAccess.subscriptionRemoveList(serverId, channelId);
      break;
    default:
      text = `Удалены все оповещения с текущего канала #${channelName}`;
      await dataAccess.subscriptionRemoveList(serverId, channelId);
  }

  msg.channel.send(text);

  return text;
}
