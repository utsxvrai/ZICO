import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

try {
    const bot = new Telegraf(process.env.BOT_TOKEN);

    bot.start((ctx) => {
        try {
            ctx.reply('Welcome to Utsav,s AlgoBot');
        } catch (error) {
            console.error('Error in start command:', error);
            ctx.reply('An error occurred while processing your request.');
        }
    });

    const binarySearch = function search(arr, x) {
        let start = 0;
        let end = arr.length - 1;
        let mid = Math.floor((start + end) / 2);
        while (start <= end) {
            if (arr[mid] === x) {
                return mid;
            }
            if (arr[mid] < x) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
            mid = Math.floor((start + end) / 2);
        }
        return undefined;
    };

    bot.command('binarySearch', (ctx) => {
        try {
            ctx.reply(binarySearch);
        } catch (error) {
            console.error('Error in binarySearch command:', error);
            ctx.reply('An error occurred while processing your request.');
        }
    });

    bot.on('text', (ctx) => {
        try {
            ctx.reply('Hello ' + ctx.message.from.first_name);
        } catch (error) {
            console.error('Error in text handler:', error);
            ctx.reply('An error occurred while processing your request.');
        }
    });

    bot.launch().then(() => {
        console.log('Bot launched successfully');
    }).catch((error) => {
        console.error('Error launching bot:', error);
    });

} catch (error) {
    console.error('Error initializing bot:', error);
}