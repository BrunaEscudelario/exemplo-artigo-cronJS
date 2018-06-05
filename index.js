const CronJob = require('cron').CronJob
const job = new CronJob('* * * * * *', () => {
	console.log('tarefa agendada')
}, null, true, 'America/Sao_Paulo')
