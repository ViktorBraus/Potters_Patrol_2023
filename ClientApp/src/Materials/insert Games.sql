INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 1,'Гаррі Поттер і філософський камінь (Гра)','Harry Potter and the Philosopher"s Stone (укр. Гаррі Поттер і Філософський камінь) — 
відеогра, розроблена компаніями KnowWonder (версія для ПК), Argonaut Games (версія для PlayStation), 
Warthog Games (версії для GameCube, Xbox, PlayStation 2) і Griptonite Games (версії для Game Boy Advance і Game Boy Color); 
також існує спрощена версія для мобільних телефонів. Видавцем гри є компанія Electronic Arts спільно з Warner Bros. 
Interactive Entertainment.',BulkColumn
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp1-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 2,'Гаррі Поттер і таємна кімната (Гра)','«Гаррі Поттер і таємна кімната» - друга гра серії «Гаррі Поттер». 
Розроблено для PlayStation, PlayStation 2, Nintendo Game Cube, Nintendo Game Boy Color і Game Boy Advance і для персональних комп"ютерів. 
Також, можливо, будуть перевидання для консолей нового покоління. Вас чекають захоплюючі місії, 
змагання з квідичу, магічні дуелі і приголомшливі сутички з Арагогом і Василіском. 
Остання коли-небудь випущена на PlayStation 1 і Game Boy Color гра серії.
Примітно, що гра для різних пристроїв розрізняється не тільки в управлінні, а й змісті.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp2-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 3,'Гаррі Поттер і в"язень Азкабану (Гра)','«Гаррі Поттер і в"язень Азкабану» — третя гра про 
Гаррі Поттера, заснована на романі Дж. К. Роулінг «Гаррі Поттер і в"язень Азкабану» 
і вийшла одночасно з релізом однойменного фільму. 
Для кожної цільової платформи (персональний комп"ютер, 
ігрові консолі, кишенькові консолі) гра кардинально відрізняється стилем і геймплеєм.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp3-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 4,'Гаррі Поттер і келих вогню (Гра)','Harry Potter and the Goblet of Fire - 
четвертий проєкт в серії ігор про Гаррі Поттера. 
Випуск був приурочений до виходу фільму кінокомпанії Warner Brothers, 
заснованому на четвертій книзі Дж. К. Роулінг. Гаррі, Рон і Герміона повертаються, 
і гравці зможуть пережити всі найкращі епізоди фільму, 
починаючи від табору світового Турніру з Квідичу і закінчуючи дуеллю з Лордом Волдемортом.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp4-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image)  
SELECT 5,'Гаррі Поттер і Орден Фенікса (Гра)','Гра «Гаррі Поттер і Орден Фенікса» 
була розроблена внутрішньої студією Electronic Arts - EA"s UK Studio, 
яка розробляла і попередні ігри серії. Видала гру сама Electronic Arts.
Гра призначена для консолей Nintendo Wii ™, PlayStation 3, Xbox 360™, 
PlayStation 2, PSP, Nintendo DS™, Game Boy Advance, а також персональних комп"ютерів.
Сюжет гри заснований на книзі Дж. К. Ролінґ «Гаррі Поттер і Орден Фенікса», 
а також однойменному фільмі.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp5-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 6,'Гаррі Поттер і напівкровний Принц (Гра)','Гаррі Поттер і напівкровний Принц — шоста гра із серії про Гаррі Поттера. 
Гра була розроблена EA Bright Light Studio і видана Electronic Arts. 
Спочатку гру планувалося випустити осінню 2008 року, 
але оскільки прем"єра однойменного фільму була перенесена на 17 липня 2009 року, 
то й випуск гри було також перенесено ближче до цієї дати. 
Гра вийшла в США 30 червня 2009, у Росії гра надійла до продажу 3 липня 2009 року. 
Гра випущена на наступні платформи: Mac OS X, Microsoft Windows, Nintendo DS, PlayStation 2, 
PlayStation 3, PlayStation Portable, Wii, Xbox 360, а також на мобільний телефон.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp6-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 7,'Гаррі Поттер і смертельні реліквії: частина перша (Гра)','Harry Potter 
and the Deathly Hallows: Part I (рус. «Гаррі Поттер і Дари Смерті: Частина I») - комп"ютерна гра, 
розроблена студією EA Bright Light і видана компанією Electronic Arts; 
сюжет гри заснований на сюжеті однойменного роману Джоан Роулінг і його екранізації. 
Вийшла 16 листопада 2010 року в версіях для персонального комп"ютера, PlayStation 3, Xbox 360, 
Wii, Nintendo DS і мобільних телефонів.
Подібно однойменному фільму, гра поділена на дві частини. 
Продовження - Harry Potter and the Deathly Hallows: Part II - 
було офіційно представлено 13 липня 2011 року.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp7-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 8,'Гаррі Поттер і смертельні реліквії : частина друга (Гра)','Harry Potter and the Deathly 
Hallows: Part II (рус. «Гаррі Поттер і Дари Смерті: частина II») - комп"ютерна гра, 
розроблена студією EA Bright Light і видана компанією Electronic Arts; 
продовження Harry Potter and the Deathly Hallows: Part I.
Вихід Harry Potter and the Deathly Hallows: 
Part II був приурочений до прем"єри однойменного фільму, яка відбулась 13 липня 2011, 
і який поставлений за романом Джоан Роулінг.
Гра випущена на персональному комп"ютері, ігрових консолях PlayStation 3, Xbox 360, Wii, 
Nintendo DS і мобільних телефонах.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp7.2-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 9,'Гаррі Поттер : Чемпіонат світу з квідичу (гра)','Гаррі Поттер: Чемпіонат світу з квідичу (англ. Harry Potter: Quidditch World Cup) — комп"ютерна гра, 
розроблена Magic Pockets спільно з Electronic Arts і видана Electronic Arts. 
Гра є спортивним симулятором вигаданої гри квідич (англ. quidditch), яка популярна в магічному 
світі Гаррі Поттера.
Гра призначена для ігрових консолей Xbox, PlayStation 2, Nintendo GameCube, Game Boy Advance, 
а також персональних комп"ютерів.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp8-game.png', Single_Blob) as image


