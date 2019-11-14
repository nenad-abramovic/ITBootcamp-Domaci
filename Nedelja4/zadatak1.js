{
  // 1. Направити објекат рецепт који садржи следеће информације: (Направите макар 4 различита рецепта)
  //     * Име рецепта
  //     * Тежина рецепта(Почетни, Лак, Средњи, Тежак, Мајстор)
  //     * Састојци(низ састојака потребних за рецепт)

  // Даље, направити програм који исписује све ове вредности у следећем облику: (најбоље направити функцију која ради ово, због следећег задатка)

  //     ```
  //     Шпагете у белом сосу:
  //     Тежина: Средњи
  //     Састојци: Шпагете,Павлака за кување,Бели лук,Ћуреће месо,Маслац,Јаја,Бибер,Со
  //     ```

  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━┓');
  console.log('┃     Први задатак    ▼ ┃');
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━┛');

  let recipe1 = {
    name: 'Киндер штангле',
    difficulty: 'Тежак',
    ingredients: [
      'Шећер',
      'Вода',
      'Маргарин',
      'Чоколада',
      'Ораси',
      'Кекс',
      'Млеко у праху'
    ]
  };

  let recipes = [
    {
      name: 'Шпагете у белом сосу',
      difficulty: 'Средњи',
      ingredients: [
        'Шпагете',
        'Павлака за кување',
        'Бели лук',
        'Ћуреће месо',
        'Маслац',
        'Јаја',
        'Бибер',
        'Со'
      ]
    },
    {
      name: 'Кувана јаја',
      difficulty: 'Почетни',
      ingredients: [
        'Јаја',
        'Вода'
      ]
    },
    {
      name: 'Пржена јаја',
      difficulty: 'Почетни',
      ingredients: [
        'Јаја',
        'Уље'
      ]
    },
    {
      name: 'Куване виршле',
      difficulty: 'Почетни',
      ingredients: [
        'Виршле',
        'Вода'
      ]
    },
    {
      name: 'Грашак са јунећим месом',
      difficulty: 'Мајстор',
      ingredients: [
        'Јунетина',
        'Грашак',
        'Шаргарепа',
        'Црни лук',
        'Суви биљни зачин',
        'Бели лук',
        'Бибер',
        'Ловор',
        'Слатка млевена паприка',
        'Брашно',
        'Путер',
        'Уље'
      ]
    },
    {
      name: 'Пуж погача са маргарином',
      difficulty: 'Средњи',
      ingredients: [
        'Млеко',
        'Квасац',
        'Брашно',
        'Шећер',
        'Со',
        'Маргарин',
        'Јаја'
      ]
    },
    {
      name: 'Пилећи паприкаш са кромпиром',
      difficulty: 'Средњи',
      ingredients: [
        'Пиле',
        'Кромпир',
        'Уље',
        'Шаргарепа',
        'Парадајз',
        'Црни лук',
        'Паприка',
        'Алева паприка',
        'Першун',
        'Бибер',
        'Со'
      ]
    },
    {
      name: 'Тесто за палачинке',
      difficulty: 'Лак',
      ingredients: [
        'Брашно',
        'Јаја',
        'Уље',
        'Млеко',
        'Вода',
        'Со',
        'Шећер'
      ]
    },
    {
      name: 'Штрудла са џемом',
      difficulty: 'Средњи',
      ingredients: [
        'Брашно',
        'Млеко',
        'Уље',
        'Јаја',
        'Квасац',
        'Со',
        'Шећер',
        'Џем'
      ]
    },
    {
      name: 'Грашак са јунећим месом',
      difficulty: 'Лак',
      ingredients: [
        'Брашно',
        'Прашак за пециво',
        'Квасац',
        'Млеко',
        'Шећер',
        'Со',
        'Уље',
        'Кисела павлака'
      ]
    }
  ];



  function printRecipe(recipe) {
    console.log(`${recipe.name}:\nТежина: ${recipe.difficulty}\nСастојци: ${recipe.ingredients.join(', ')}`);
  }

  printRecipe(recipe1);


  // 2. Направити функцију која прима низ горе направљених објеката и исписује оне рецепте који су Почетни или Лаки(не исписује остале)

  //     ```
  //     <ime-recepta>
  //     Тежина: <Лаки || Почетни>
  //     Састојци: [<...>,...]
  //     ```

  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━┓');
  console.log('┃    Други задатак    ▼ ┃');
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━┛');

  function printRecipe(recipe) {
    console.log(`${recipe.name}:\nТежина: ${recipe.difficulty}\nСастојци: ${recipe.ingredients.join(', ')}`);
  }

  function printEasyRecipes(recipes) {
    recipes.forEach(recipe => {
      if (['Почетни', 'Лак'].includes(recipe.difficulty)) {
        printRecipe(recipe);
        console.log();
      }
    });
  }

  printEasyRecipes(recipes);
}
{
  // 3. Направити објекат састојак који садржи следеће информације: (Направити макар 5)
  //     * Име састојка
  //     * Количина
  //     * Цена

  //     ```
  //     sastojak1 = {
  //         ...
  //     }

  //     sastojak2 = {
  //         ...
  //     }
  //     ```

  // 4. Направити објекат из првог задатка, али уместо низа String - ова, направити низ објеката из трећег задатка

  // 5. Направити функцију која рачуна укупну цену рецепта(функција је везана за објекат(this))(За сваки састојак из рецепта одредити цену, па сабрати то(цена у самом објекту је написана за Количину 1, па укупну цену за један састојак рачунамо са количина * цена))

  //     ```
  //     recept = {
  //         ...
  //     }

  //     recept.cena = function(){
  //         ...
  //     }
  //     ```
  class Recept {
    constructor(name, difficulty, ...ingredients) {
      this.name = name;
      this.difficulty = difficulty;
      this.ingredients = ingredients;
    }
    cena() {
      return this.ingredients.reduce((acc, c) => acc + (c.unitPrice * c.qunatity), 0);
    }
  }

  class Sastojak {
    constructor(name, qunatity, unitPrice) {
      this.name = name;
      this.qunatity = qunatity;
      this.unitPrice = unitPrice;
    }
  }

  let sastojak1 = new Sastojak('Шећер', 0.1, 55);
  let sastojak2 = new Sastojak('Вода', 1, 70);
  let sastojak3 = new Sastojak('Маргарин', 0.2, 270);
  let sastojak4 = new Sastojak('Чоколада', 2, 100);
  let sastojak5 = new Sastojak('Ораси', 0.1, 290);
  let sastojak6 = new Sastojak('Кекс', 0.5, 180);
  let sastojak7 = new Sastojak('Млеко у праху', 0.4, 120);

  let recept = new Recept(
    'Киндер штангле',
    'Тежак',
    sastojak1,
    sastojak2,
    sastojak3,
    sastojak4,
    sastojak5,
    sastojak6,
    sastojak7
  );

  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━┓');
  console.log('┃     Пети задатак    ▼ ┃');
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━┛');

  console.log(`Укупна цена рецепта је ${recept.cena()} динара.`);
}