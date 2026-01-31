import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.8545496811:AAGAiN8zTzK_3PcddI5r8Li5RI3a4d6_5aU);

bot.start((ctx) => {
  ctx.reply("Bot ishlayapti 🚀");
});

bot.on("chat_join_request", async (ctx) => {
  const user = ctx.update.chat_join_request.from;

  await ctx.telegram.sendMessage(
    user.id,
    "📩 So'rovingiz yuborildi. Admin tasdiqlashini kuting."
  );
});

bot.launch();
