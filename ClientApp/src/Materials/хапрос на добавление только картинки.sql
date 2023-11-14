UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Гриффиндор.png', SINGLE_BLOB) AS image)
WHERE Result = 'Ґрифіндор';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Слизерин.png', SINGLE_BLOB) AS image)
WHERE Result = 'Слізерін';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Пуффендуй.png', SINGLE_BLOB) AS image)
WHERE Result = 'Хафелпаф';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Когтевран.png', SINGLE_BLOB) AS image)
WHERE Result = 'Рейвенкло';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\палочка.png', SINGLE_BLOB) AS image)
WHERE Test_Id_=2;