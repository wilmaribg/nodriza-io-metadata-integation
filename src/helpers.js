module.exports = {
	customSrName: function (name) {
		return `Hello sr ${name}`
	},
	customTable: function (header1, header2, header3) {
    const tbody = [[1, 2, 3], [4, 5, 6]].reduce((acc, tr) => {
      const getTd = (tr) => tr.map(td => `<td>${td}</td>`).join('') 
      return acc += `<tr>${getTd(tr)}</tr>`
    }, '')
		return `
			<table class="customTable">
			 <thead>
        <th>${header1}</th>
        <th>${header2}</th>
        <th>${header3}</th>
       </thead>
       <tbody>
        ${tbody}
       </tbody>
			</table>
		`
	},
}
