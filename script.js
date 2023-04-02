fetch('https://quad-back.arjunsharma1152.repl.co/api/v1/alldata')
  .then(res => {
    return res.json();
  })
  .then(alldata => {
    console.log(alldata.data.items);

    var displaydata = "";

    let c = 1;

    alldata.data.items.map((values) => {
      displaydata += `<tr class="white-text">
          <td><h4 class="first-cell grey-color">${c}</h4></td>
          <td><h4 class="grey-color">${values.name}</h4></td>
          <td><h4 class="grey-color">${values.last}</h4></td>
          <td><h4 class="grey-color">₹ ${values.buy} / ₹ ${values.sell}</h4></td>
          <td><h4 class="grey-color">${values.volume}</h4></td>
          <td><h4 class="last-cell grey-color">${values.base_unit}</h4></td>
        </tr>`;
      c++;
    });

    document.getElementById(" table-body").innerHTML += displaydata;
  })
  .catch(err => {
    console.log(err);
  })
