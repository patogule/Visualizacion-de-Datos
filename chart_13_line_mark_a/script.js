d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'anio_mision',
        y: 'mision_hs',
        z: 'nombre',
        stroke: 'nombre',
      }),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
  })
  d3.select('#chart').append(() => chart)
})
