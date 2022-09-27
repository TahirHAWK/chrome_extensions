import * as test2 from './test2.js'
import { test33 } from './test3.js'

test2.test()

test2.test12()

test33()

fetch("http://localhost:3000/myextensions/dataCollector/firstOne/enterpress/from_browser",
                    {
                        method: "GET",
                    })
                    .then(function(res){ return res.json(); })
                    .then(function(data){ 
                        alert( JSON.stringify( data )) 
                    console.log(data)
                    })