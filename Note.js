bot.on("message", async (ctx) => {
  const kanalId = -1003760262185;

  const member = await ctx.telegram.getChatMember(
    kanalId,
    ctx.from.id
  );

  if (member.status === "left") {
    await ctx.deleteMessage();

    await ctx.telegram.restrictChatMember(
      ctx.chat.id,
      ctx.from.id,
      { permissions: { can_send_messages: false } }
    );

    await ctx.reply("❌ Avval kanalga qo‘shiling!");
  }
});
