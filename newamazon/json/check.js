a = [
    {
        "id": 1,
        "Category": "Fashion",
        "category_id": 1,
        "type": ["Men's-wear", "Boys", "girls"],
        "img": ["https://i.ibb.co/Sy445rz/4.jpg", "https://i.ibb.co/Jp6FVZv/58.jpg", "https://i.ibb.co/hFr2Vy4/72.jpg"]
    },
    {
        "id": 1,
        "Category": "Fashion",
        "category_id": 1,
        "type": "Women's-wear",
        "img": ["https://i.ibb.co/3Rv4DQ9/31.jpg", "https://i.ibb.co/hVtkhC8/27.jpg", "https://i.ibb.co/Tkk6CXh/37.jpg", "https://i.ibb.co/ZKpxDwb/40.jpg", "https://i.ibb.co/BnJSx2Z/35.jpg"]
    },
    {
        "id": 2,
        "Category": "ELectronics",
        "category_id": 2,
        "type": ["Phone", ""],
        "img": ["https://i.ibb.co/Y3MMdXq/81.jpg", "https://i.ibb.co/yV4znRP/86.jpg", "https://i.ibb.co/v3FKw1d/137.jpg", "https://i.ibb.co/h9QrCgs/101.jpg", "https://i.ibb.co/CKcxWY2/116.jpg"]
    },
    {
        "id": 3,
        "Category": "Books",
        "category_id": 3,
        "type": ["BIOGRAPHY", "mythology", "personality-dev", "Investment"],
        "img": ["https://i.ibb.co/6ZqJ1pY/1.jpg", "https://i.ibb.co/p2tgK5V/3.jpg", "https://i.ibb.co/j8ydbDw/6.jpg", "https://i.ibb.co/Cbw3Gnt/8.jpg", "https://i.ibb.co/6t890CQ/13.jpg"]
    }
]

const listdata = ({ a }) => {
    // console.log(">>>DIlip tatttti", proData.length)
    for (i = 0; i <a.length; i++) {
        console.log(a[i])
        if (i % 2 == 0)
            console.log(a, "Even")
        else
            console.log(a, "odd")
    }

for(i=0;i<a.length;i++){
    console.log(a[i])
    if(i%2==0)
      console.log(a,"Even")
   else
      console.log(a,"odd")
}


return
    for (i = 0; i < proData.length; i++) {
        console.log(proData[i])
        if (i % 2 == 0)
            console.log(proData, "Even")
        else
            console.log(proData, "odd")
}



        if (proData) {
            console.log(">>>mealData", proData)
            return proData.map((item) => {
                console.log(">>>>>>SRFRWFWE", proData[1])
                return (
                    <div className="grid">

                   
                    
                        <hr /><br />
                    </div>
                )
            })
        }
        else{
            console.log("check API")
    }
