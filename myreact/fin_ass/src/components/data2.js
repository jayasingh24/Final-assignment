import React from 'react'
import lock from '../images/lock.png';

const configData = {
    "config": {
      "IDField": "RowId",
      "LocalHandled": true,
      "ListDisplayType": "HIERARCHY-ASSOCIATE",
      "Fields": [
        {
          "Key": "F784",
          "Title": "As On Date",
          "DataType": "string"
        },
        {
          "Key": "F782",
          "Title": "Company Name",
          "DataType": "string"
        },
        {
          "Key": "F783",
          "Title": "Entity Category",
          "DataType": "string"
        },
        {
          "Key": "F768",
          "Title": "Entity Name",
          "DataType": "string"
        }
      ],
      "Hierarchy": {
        "GroupField": "F783",
        "Style": "Associate",
        "RootField": "F782"
      }
    },
    "root": {
      "Text": "HUBTOWN LIMITED"
    },
    "data": [
      {
        "groupByVal": "Subsiduary",
        "groupByID": "F783",
        "values": {
          "F768": null,
          "F782": null,
          "F783": "Subsiduary",
          "F784": null
        },
        "leafRows": [
          {
            "RowIndex": 0,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Subsiduary",
            "F768": "CITYWOOD BUILDERS PRIVATE LIMITED",
            "RowId": 0,
            "DisableRow": false
          },
          {
            "RowIndex": 1,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Subsiduary",
            "F768": "DIVINITI PROJECTS PRIVATE LIMITED",
            "RowId": 1,
            "DisableRow": false
          },
          {
            "RowIndex": 2,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Subsiduary",
            "F768": "VAMA HOUSING LIMITED",
            "RowId": 2,
            "DisableRow": false
          }
        ]
      },
      {
        "groupByVal": "Associate",
        "groupByID": "F783",
        "values": {
          "F768": null,
          "F782": null,
          "F783": "Associate",
          "F784": null
        },
        "leafRows": [
          {
            "RowIndex": 15,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Associate",
            "F768": "HUBTOWN BUS TERMINAL (AHMEDABAD) PRIVATE LIMITED",
            "RowId": 15,
            "DisableRow": false
          },
          {
            "RowIndex": 16,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Associate",
            "F768": "HUBTOWN BUS TERMINAL (MEHSANA) PRIVATE LIMITED",
            "RowId": 16,
            "DisableRow": false
          },
          {
            "RowIndex": 17,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Associate",
            "F768": "SUNSTREAM CITY PRIVATE LIMITED",
            "RowId": 17,
            "DisableRow": false
          },
          {
            "RowIndex": 18,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Associate",
            "F768": "RARE TOWNSHIPS PRIVATE LIMITED",
            "RowId": 18,
            "DisableRow": false
          },
          {
            "RowIndex": 19,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Associate",
            "F768": "JOYOUS HOUSING LIMITED",
            "RowId": 19,
            "DisableRow": false
          },
          {
            "RowIndex": 20,
            "F784": "31/03/2021",
            "F782": "HUBTOWN LIMITED",
            "F783": "Associate",
            "F768": "GIRAFFE DEVELOPERS PRIVATE LIMITED",
            "RowId": 20,
            "DisableRow": false
          }
        ]
      }
    ]
  }

const Data2 = () => {
  return (
    <div className='data2'> <span className='box1'>Associate </span>
    {configData.data.map((item)=>{
        return(
            
<div className='sec2'>
{item.leafRows.map((subSection)=>{
    return(
<div className='detail'>

<img src={lock} alt="img" className="lock"/>
<div className="finaldata"  >
{subSection.F782} , ""
{subSection.F768} 
" AS ON {subSection.F784}  
</div>
</div>

    )
})

}

</div>
        )
})
       
            
    }

</div>



  )
}

export default Data2