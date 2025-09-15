fetch('majorNeutralSkips.json')
    .then(response => response.json())
    .then(movesData => {
        const tbody = document.querySelector('#majorMovesTable tbody');
        movesData.forEach(element => {
            const row = document.createElement('tr');

            const charCell = document.createElement('td');
            charCell.textContent = element.Character;

            const moveCell = document.createElement('td');
            if (element.link) {
                const link = document.createElement('a');
                link.href = element.link;
                link.textContent = element.Move;
                moveCell.appendChild(link);
            } else {
                moveCell.textContent = element.Move;
            }
            
            const notesCell = document.createElement('td');
            notesCell.textContent = element.Notes;

            row.appendChild(charCell);
            row.appendChild(moveCell);
            row.appendChild(notesCell);
            tbody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error loading JSON: ', error);
    })

fetch('minorNeutralSkips.json')
    .then(response => response.json())
    .then(movesData => {
        const tbody = document.querySelector('#minorMovesTable tbody');
        movesData.forEach(element => {
            const row = document.createElement('tr');

            const charCell = document.createElement('td');
            charCell.textContent = element.Character;

            const moveCell = document.createElement('td');
            if (element.link) {
                const link = document.createElement('a');
                link.href = element.link;
                link.textContent = element.Move;
                moveCell.appendChild(link);
            } else {
                moveCell.textContent = element.Move;
            }
            
            const notesCell = document.createElement('td');
            notesCell.textContent = element.Notes;

            row.appendChild(charCell);
            row.appendChild(moveCell);
            row.appendChild(notesCell);
            tbody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error loading JSON: ', error);
    })