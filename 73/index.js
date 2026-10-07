       const Livros =
        {
       "id": 1,
       "nome": "Dom Casmurro",
       "pags": 85
        }
       
       const string = JSON.stringify(Livros)
       console.log(string)
       console.log(Livros)

       fetch('livros.json').then(response => response.json()).then(value => console.log(value)
       )