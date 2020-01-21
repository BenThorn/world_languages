d3.csv('UN_languages.csv').then((unData) => {

  const dataLang = Array.from(d3.group(unData, d => d["Country or Area"])).slice(0,86)
  .map((d) => {
    let res = {
      country: d[0],
    }

    const languages = Array.from(d3.group(d[1], d => d.Language));

    languages.forEach(d => {
      res[d[0]] = parseInt(d[1]
        .filter(a => a.Sex === "Both Sexes" && a.Area === "Total")[0].Value);
    });
    
    return res;
  });

  d3.csv('countries of the world.csv').then((dataCountries) => {
    // European data gained from http://www.bbc.co.uk/languages/european_languages/
    dataLang.push(
      { 
        country: "South Korea",
        generated: true,
        "Korean": estimatePopulation(dataCountries, "Korea, South", .99)
      },
      { 
        country: "North Korea",
        generated: true,
        "Korean": estimatePopulation(dataCountries, "Korea, North", .99)
      },
      { 
        country: "France",
        generated: true,
        "French": estimatePopulation(dataCountries, "France", .88),
        "Arabic": estimatePopulation(dataCountries, "France", .036),
        "Portuguese": estimatePopulation(dataCountries, "France", .015),
        "Spanish": estimatePopulation(dataCountries, "France", .012),
        "Italian": estimatePopulation(dataCountries, "France", .01),
        "German": estimatePopulation(dataCountries, "France", .037),
        "Turkish": estimatePopulation(dataCountries, "France", .005),
        "English": estimatePopulation(dataCountries, "France", .004),
        "Catalan": estimatePopulation(dataCountries, "France", .004),
        "Flemish": estimatePopulation(dataCountries, "France", .002),
        "Basque": estimatePopulation(dataCountries, "France", .001),
        "Breton": estimatePopulation(dataCountries, "France", .017),
      },
      { 
        country: "Germany",
        generated: true,
        "German": estimatePopulation(dataCountries, "Germany", .95),
        "Turkish": estimatePopulation(dataCountries, "Germany", .018),
        "Sorbian": estimatePopulation(dataCountries, "Germany", .001),
        "Kurdish": estimatePopulation(dataCountries, "Germany", .003),
        "Danish": estimatePopulation(dataCountries, "Germany", .001)
      },
      { 
        country: "Belgium",
        generated: true,
        "Dutch": estimatePopulation(dataCountries, "Belgium", .55),
        "French": estimatePopulation(dataCountries, "Belgium", .36),
        "German": estimatePopulation(dataCountries, "Belgium", .004)
      },
      { 
        country: "Spain",
        generated: true,
        "Spanish": estimatePopulation(dataCountries, "Spain", .75),
        "Catalan": estimatePopulation(dataCountries, "Spain", .17),
        "Galician": estimatePopulation(dataCountries, "Spain", .007),
        "Basque": estimatePopulation(dataCountries, "Spain", .002),
      },
      { 
        country: "Italy",
        generated: true,
        "Italian": estimatePopulation(dataCountries, "Italy", .95),
        "Sardinian": estimatePopulation(dataCountries, "Italy", .017),
        "Albanian": estimatePopulation(dataCountries, "Italy", .002),
        "Greek": estimatePopulation(dataCountries, "Italy", .002),
        "Croatian": estimatePopulation(dataCountries, "Italy", .002),
        "Catalan": estimatePopulation(dataCountries, "Italy", .0007),
      },
      { 
        country: "Denmark",
        generated: true,
        "Danish": estimatePopulation(dataCountries, "Denmark", .98),
        "German": estimatePopulation(dataCountries, "Denmark", .004),
        "Inuit": estimatePopulation(dataCountries, "Denmark", .001),
      },
      { 
        country: "Sweden",
        generated: true,
        "Swedish": estimatePopulation(dataCountries, "Sweden", .93),
        "Finnish": estimatePopulation(dataCountries, "Sweden", .03)
      },
      { 
        country: "Netherlands",
        generated: true,
        "Dutch": estimatePopulation(dataCountries, "Netherlands", .90),
        "Frisian": estimatePopulation(dataCountries, "Netherlands", .022),
        "Turkish": estimatePopulation(dataCountries, "Sweden", .006),
        "Arabic": estimatePopulation(dataCountries, "Sweden", .006),
      },
      { 
        country: "Norway",
        generated: true,
        "Norwegian": estimatePopulation(dataCountries, "Norway", .99),
        "Finnish": estimatePopulation(dataCountries, "Norway", .002),
      },
      { 
        country: "Portugal",
        generated: true,
        "Portuguese": estimatePopulation(dataCountries, "Portugal", .99),
      },
      { 
        country: "Greece",
        generated: true,
        "Greek": estimatePopulation(dataCountries, "Greece", .98),
        "Macedonian": estimatePopulation(dataCountries, "Greece", .006),
        "Albanian": estimatePopulation(dataCountries, "Greece", .004),
        "Turkish": estimatePopulation(dataCountries, "Greece", .002),
      },
      { 
        country: "Iran",
        generated: true,
        "Persian": estimatePopulation(dataCountries, "Iran", .50),
        "Azerbaijani": estimatePopulation(dataCountries, "Iran", .22),
        "Kurdish": estimatePopulation(dataCountries, "Iran", .08),
        "Mazandarani": estimatePopulation(dataCountries, "Iran", .07),
        "Lur": estimatePopulation(dataCountries, "Iran", .07),
        "Arabic": estimatePopulation(dataCountries, "Iran", .025),
        "Baloch": estimatePopulation(dataCountries, "Iran", .014),
        "Tati": estimatePopulation(dataCountries, "Iran", .01),
      },
      { 
        country: "Egypt",
        generated: true,
        "Arabic": estimatePopulation(dataCountries, "Egypt", .98),
        "Domari": estimatePopulation(dataCountries, "Egypt", .003),
        "Nobiin": estimatePopulation(dataCountries, "Egypt", .003),
      },
      { 
        country: "Turkey",
        generated: true,
        "Turkish": estimatePopulation(dataCountries, "Turkey", .85),
        "Kurdish": estimatePopulation(dataCountries, "Turkey", .12),
        "Arabic": estimatePopulation(dataCountries, "Turkey", .015),
        "Zazaki": estimatePopulation(dataCountries, "Turkey", .01),
      },
      { 
        country: "Brazil",
        generated: true,
        "Portuguese": estimatePopulation(dataCountries, "Brazil", .97),
        "Japanese": estimatePopulation(dataCountries, "Brazil", .01),
        "German": estimatePopulation(dataCountries, "Brazil", .01),
        "Italian": estimatePopulation(dataCountries, "Brazil", .01),
      },
      { 
        country: "Japan",
        generated: true,
        "Japanese": estimatePopulation(dataCountries, "Japan", .99)
      },
      { 
        country: "China",
        generated: true,
        "Chinese": estimatePopulation(dataCountries, "China", .71),
        "Cantonese": estimatePopulation(dataCountries, "China", .28),
      });


    datasetLang = dataLang.map((d) => {
      let languages = [];
      Object.keys(d).forEach(k => {
        // More data cleaning (don't want useless data)
        if(
          k !== 'country' 
          && k !== 'generated' 
          && !k.toLowerCase().includes('other') 
          && !k.toLowerCase().includes('total')
          && !k.toLowerCase().includes('none')
          && !k.toLowerCase().includes('unknown')
          && !k.toLowerCase().includes('not stated')) {
          languages.push({
            name: k,
            value: d[k]
          });
        }
      });


      return {
        country: d.country,
        generated: d.generated ? true : false,
        languages: languages
      }
    });

    
    let languageList = [];

    datasetLang.forEach(d => {
      d.languages.forEach(l => {
        languageList.push(l);
      });
    });

    // All of this is for getting a list of languages for the dropdown

    const languageGrouping = d3.group(languageList, d => d.name);

    const languageNames = Array.from(languageGrouping).map(d => d[0]).sort();

    const dropdown = d3.select('#languages');

    let selectedLang = null;

    languageNames.forEach(d => {
      dropdown
      .append('option')
      .attr('value', d);
    })

    let svg_dx = 0;
    let svg_dy = 0;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const projection = d3.geoMiller()
      .scale(w / 2 / Math.PI)
      .translate([w / 2, h * .62]);

    const svg = d3.select('#svg')
      .attr('width', w)
      .attr('height', h)

    svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "skyblue");

    const zoom = d3.zoom()
    .extent([[svg_dx, svg_dy], [w-(svg_dx*2), h-svg_dy]])
    .scaleExtent([1, 6])
    .translateExtent([[svg_dx, svg_dy], [w-(svg_dx*2), h-svg_dy]])
    .on('zoom', zoomed);

    const g = svg.append('g');

    svg.call(zoom);

    d3.json('custom.geo.json').then((mapData) => {
      const countryNames = [];
      let cloroplethActive = false;

      mapData.features.forEach(d => {
        countryNames.push(d.properties.admin);
      });

      // Shows what countries are in the dataset but not on the map

      // datasetLang.forEach(d => {
      //   if(!countryNames.includes(d.country)){
      //     console.log(d.country);
      //   }
      // })
      
      // Map maker map maker...
      g
      .selectAll("path")
      .data(mapData.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      .attr('stroke-width', .25)
      .attr('stroke', 'white')
      .attr("fill", (d) => setColor(datasetLang, d, "darkgreen"))
      .on('mouseover', (d) => {
        if(!cloroplethActive){
          d3.select(event.currentTarget)
          .attr('fill', setColor(datasetLang, d, "gold"));
        }
        
        if(determineValid(datasetLang, d)){
          const key = d => d.name;
          // The country's admin prop was originally used for storage
          const searchCountry = d.properties.admin;
          
          const dataset = datasetLang.find(d => d.country === searchCountry).languages;

          const colorScale = d3.scaleOrdinal()
          .range(d3.quantize(t => d3.interpolateTurbo(t * .8 + .1), dataset.length))

          const miniSvgRadius = 200;

          // Make donut chart in tooltip
          const svg = d3.select('#tooltipSvg')
          .attr('width', miniSvgRadius)
          .attr('height', miniSvgRadius)

          const pie = d3.pie()
          .value((d) => d.value);

          const arc = d3.arc()
          .innerRadius(50)
          .outerRadius(70)
          
          let arcs = svg
          .selectAll('g.arc')
          .data(pie(dataset), key);

          arcs.exit().remove();

          arcs
          .join('g')
          .attr('class', 'arc')
          .attr("transform", `translate(${miniSvgRadius / 2},${miniSvgRadius / 2})`)
          .append('path')
          .attr('d', arc)
          .attr('fill', (d,i) => {
            return dataset.length == 1 ? "rgb(74, 88, 221)" : colorScale(i)
          })
        }
      })
      .on('mousemove', (d) => {
        // The country's name prop is shorter and used for display
        const country = d.properties.name;
        const searchCountry = d.properties.admin;

        const bodyDOMElem = d3.select('body').node();
        const [mouseX, mouseY] = d3.mouse(bodyDOMElem);

        if(determineValid(datasetLang, d)){
          let selectedLangData = null;
          if(selectedLang !== null) {
            selectedLangData = datasetLang.find(d => d.country === searchCountry).languages.find(l => l.name === selectedLang);
          }

          d3.select('#tooltip')
          .style("left",  `${mouseX - (150 / 2)}px`)
          .style("top", `${mouseY - 170}px`)
          .style('visibility', 'visible')
          .select('p')
          .style('margin-top', () => {
            if(selectedLangData){
              return '50px';
            } else {
              return '60px';
            }
          })
          .text(country + (selectedLangData ? ': ' + d3.format(',')(selectedLangData.value) : ''));
        }
      })
      .on('mouseout', (d) => {
        d3.select('#tooltip')
        .style('visibility', 'hidden')

        d3.select('#tooltipSvg > *').remove();

        // Reset color
        if(!cloroplethActive){
          d3.select(event.currentTarget)
          .attr('fill', (d) => setColor(datasetLang, d, "darkgreen"));
        }
      })
      .on('click', (d) => {
        if(determineValid(datasetLang, d)){
          const searchCountry = d.properties.admin;

          const wasGenerated = datasetLang.find(d => d.country === searchCountry).generated;
          d3.select('#detailCountry')
          .text(d.properties.admin + (wasGenerated ? '*' : ''));

          const dataset = datasetLang.find(d => d.country === searchCountry).languages;
          
          slidOut = true;
          slideDetails(true);

          makeBarGraph(dataset);
        }
      });

      // Setup cloropleth making search buttons

      d3.select('#searchButton')
      .on('click', () => {
        const language = document.querySelector('#languageSelect').value;
        selectedLang = language;
        const dataset = [];
        
        datasetLang.forEach(d => {
          d.languages.forEach(l => {
            if(l.name === language) {
              dataset.push({
                country: d.country,
                value: l.value
              });
            }
          });
        });

        dataset.sort((a,b) => b.value - a.value);

        // Use scale log so highest country doesn't dominate (found a use Travis!)
        const colorScale = d3.scaleLog()
        .domain(d3.extent(dataset.map((d) => d.value)))
        .range(["aliceblue", "indigo"]);

        cloroplethActive = true;

        g.selectAll('path')
        .attr('fill',(d) => {
          // Sets color based on the color scale and the current language value
          const countryName = d.properties.admin;
          const match = dataset.find(c => countryName === c.country)
          if(match){
            return setColor(datasetLang, d, colorScale(match.value));
          }
          return setColor(datasetLang, d, "lightgray") 
        });
      });

      // Clears language selection and sets things back to normal
      d3.select('#clearButton')
      .on('click', () => {
        cloroplethActive = false;
        selectedLang = null;
        document.querySelector('#languageSelect').value = '';

        g.selectAll('path')
        .attr('fill', (d) => setColor(datasetLang, d, "darkgreen"));
      });
    }); 

    function zoomed() {
      g
        .selectAll('path')
        .attr('transform', d3.event.transform);
    }
  });
});

/* For countries not in the main dataset that I wanted to
include, I extrapolate their language populations from percentage
data found elsewhere */

const estimatePopulation = (dataset, country, percent) => {
  return Math.round(parseInt(dataset.find(d => d.Country.trim() === country).Population) * percent);
}

// Determines validity and returns lightgray for nonvalid countries
const setColor = (dataset, d, color) => {
  if(determineValid(dataset, d)){
    return color;
  } else {
    return 'lightgray';
  }
}

// I am often checking to see if a country is included in a dataset or not
const determineValid = (dataset, d) => {
  if(dataset.map(d => d.country).includes(d.properties.admin)){
    return true;
  } else {
    return false;
  }
}

// Make detailed bar graph in the detail window
const makeBarGraph = (data) => {

  // I do this to avoid sorting the original array
  const dataset = data.map(d => d).sort((a,b) => b.value - a.value);

  let w = 400;
  let h = dataset.length * 45;

  let marginLeft = 10;
  let marginBottom = 20;
  let marginRight = 200;

  svg = d3.select('#detailSvg')
    .attr('width', w)
    .attr('height', h)
    .on("wheel", function() { d3.event.preventDefault(); });

  scaleSvg = d3.select('#scaleSvg')
    .attr('width', w)
    .attr('height', 20);

  svg.select('.axis-left1').remove()
  scaleSvg.select('.axis-top').remove()

  // Zoom functions
  const zoom = d3.zoom()
  .extent([[0, 0], [w, h]])
  .scaleExtent([1, 5000])
  .translateExtent([[0, 0], [w, h]])
  .on('zoom', zoomed);

  function zoomed() {
    xScale.domain([0, d3.max(dataset, (d) => d.value) / d3.event.transform.k])
    .rangeRound([2, w]);

    svg.selectAll("rect")
    .attr("width", d => xScale(d.value))
    svg.selectAll(".axis-left1").call(yAxis);

    xAxisGroup.call(xAxis);
  }

  svg.call(zoom);

  xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d.value)])
  .rangeRound([2, w ])
  .nice();

  yScale = d3.scaleBand()
    .domain(dataset.map((d) => d.name))
    .range([0, h - marginBottom])
    .paddingInner(.6);

  const colorScale = d3.scaleOrdinal()
  .range(d3.quantize(t => d3.interpolateBlues(t * .8 + .1), dataset.length).reverse())

  const rects = svg.selectAll('rect')
    .data(dataset)

    svg.transition()
    .duration(750)
    .call(zoom.transform, d3.zoomIdentity);
   
  rects
    .exit()
    .remove();

  rects 
    .join('rect')
    .attr('x', d => marginLeft)
    .attr('y', d => yScale(d.name))
    .attr('height', yScale.bandwidth)
    .attr('width', 0)
    .on('mousemove', d => {
      const bodyDOMElem = d3.select('body').node();
      const [mouseX, mouseY] = d3.mouse(bodyDOMElem);

      d3.select('#popTooltip')
      .style("left",  `${mouseX}px`)
      .style("top", `${mouseY - 30}px`)
      .style('visibility', 'visible')
      .select('p')
      .text(d3.format(",")(d.value));
    })
    .on('mouseout', d => {
      d3.select('#popTooltip')
      .style('visibility', 'hidden');
    })
    .transition()
    .duration(1000)
    .attr('width', d => xScale(d.value))
    .attr('fill', d => {
      return dataset.length == 1 ? "rgb(74, 88, 221)" : colorScale(d.name)
    });

  rects
    

  xAxis = d3.axisTop(xScale).ticks(4);
  yAxis = d3.axisLeft(yScale);

  yAxisGroup = svg.append('g')
    .attr('class', 'axis-left1')
    .attr('transform', `translate(${marginLeft + 9},17)`)
    .call(yAxis);

  xAxisGroup = scaleSvg.append('g')
    .attr('class', 'axis-top')
    .attr('transform', `translate(${0},19)`)
    .call(xAxis);
  
  yAxisGroup.selectAll('text')
    .attr('text-anchor', 'start');
};

// Detail box sliding

let slidOut = false;
let storySlidOut = false;

const slideDetails = (slideOut) => {
  slideStory(false);
  storySlidOut = false;
  if(slideOut){
    d3.select('#detailBox')
    .transition()
    .duration(100)
    .style('left', '-10px');
  } else {
    d3.select('#detailBox')
    .transition()
    .duration(100)
    .style('left', '-450px');
  }
};

const slideStory = (slideOut) => {
  if(slideOut){
    d3.select('#storyBox')
    .transition()
    .duration(100)
    .style('left', '-10px');
  } else {
    d3.select('#storyBox')
    .transition()
    .duration(100)
    .style('left', '-450px');
  }
};

d3.select('#slideButton')
.on('click', () => {
  if(!slidOut){
    slideDetails(true);
    slidOut = true;
  }
  else {
    slideDetails(false)
    slidOut = false;
  }
});

d3.select('#slideButtonStory')
.on('click', () => {
  if(!storySlidOut){
    slideStory(true);
    storySlidOut = true;
  }
  else {
    slideStory(false)
    storySlidOut = false;
  }
});