import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

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
