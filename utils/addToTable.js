// @params: table<Node>, text<String>, status<Boolean> 
function addToTable(table, text, status) {
    const trRow = document.createElement('tr');
    
    trRow.innerHTML = `
        <td>${text}</td> 
        <td>${status ? 'Completed' : 'Not completed'}</td> 
    `

    table.appendChild(trRow);
}


export { addToTable };