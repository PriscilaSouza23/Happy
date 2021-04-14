const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.5303943",
    lng: "-47.1441749",
    name: "Lar das meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos uqe se encontra em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "11997734074",
    images: [
      "https://images.unsplash.com/photo-1613476092780-4c1e21d9d4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2NjE0MzEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",

      "https://images.unsplash.com/photo-1614614175853-521c5a98e110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2NjE0MzYx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    ].toString(),
    instructions:
      "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 08h às 18h",
    open_on_weekends: "0",
  });

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage);

  //deletar dado da tabela
  // console.log(await db.run("DELETE FROM tabela orphanages WHERE id = '3'"))
});