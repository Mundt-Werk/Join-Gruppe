let allTasks = [];

function add(){
    let description = document.getElementById('description').value;     // wir nehmen den Wert aus dem Feld mit der ID description
    let category = document.getElementById('category').value;           // wir nehmen den Wert aus dem Feld mit der ID category

    let task = {                                                        // wir erstellen eine Variable mit den Werten 
        'description': description, 
        'category': category,
        'createdAt': new Date().getTime()                               // new Date().getTime() speichert uns den Zeitstempel
    };

    allTasks.push(task);                                                // wir pushen alles von task in allTasks 

    let allTasksAsString = JSON.stringify(allTasks);                    // wir ändern es zu Text um es im LocalStorage speichern zu können
    localStorage.setItem('allTasks', allTasksAsString);                 // wir speichern es im LocalStorage unter 'allTasks'
}

function loadAllTasks(){                                        
    let allTasksAsString = localStorage.getItem('allTasks');            // wir laden alles aus dem LocalStorage
    allTasks = JSON.parse(allTasksAsString);                            // wir wandeln Text wieder um 

    console.log('Loaded all tasks', allTasks);                          // nur um zu sehen was nun in allTasks gespeichert wurde 
}