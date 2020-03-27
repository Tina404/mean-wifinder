# start the mongoDB shell
mongo 

# show all databases
show dbs

# activate the target database 
use wifinder

# display all collections (aka tables)
show collections

# query documents/entries in locations collection/table
db.locations.find()

# manually save entry to locations collection
db.locations.save(
    {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        coords: [-0.9690884, 51.455041],
        openingTimes:[
            {
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            },
            {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            },
            {
                days: 'Sunday',
                closed: true
            }
        ]
    }
)

# query documents/entries in locations collection/table to confirm saved correctly
db.locations.find()

# save more entries to locations collection
db.locations.save(
    {
        name: 'Cafe Hero',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        coords: [-0.9696884, 51.455641],
    }
)

db.locations.save(
    {
        name: 'Burger Queen',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 2,
        facilities: ['Food', 'Premium wifi'],
        coords: [-0.9710884, 51.455341],
    }
)

# use pretty() method to add line breaks and indentations to be more human-friendly
db.locations.find().pretty()

# update an existing location document with a review subdocument
# first param of update() is query object to identify the document to update to
# use "$push" cmd to add a new object to the "reviews" path
# MongoDB does not automatically add _id to subdocuments 
# Giving the review subdocument the value of ObjectId() tells MongoDB 
# to create a new unique ID for this document
db.locations.update(
    {
        name: 'Starcups'
    }, 
    {
        $push: { 
            reviews: {
                author: 'Simon Holmes',
                _id: ObjectId(), 
                rating: 5,
                timestamp: new Date("Mar 25, 2020"),
                reviewText: "What a great place! Wifi here is super!"
            }
        }
    }
)

# update the location document with another review subdocument
db.locations.update(
    {
        name: 'Starcups'
    }, 
    {
        $push: { 
            reviews: {
                author: 'John Adams',
                _id: ObjectId(), 
                rating: 4,
                timestamp: new Date("Mar 26, 2020"),
                reviewText: "The Wi-Fi here is not bad."
            }
        }
    }
)

# query the collection by a document identifier object 
db.locations.find({name:'Starcups'}).pretty()


# dump the data from the dev database wifinder
mongodump -h localhost:27017 -d wifinder

# restore the data from previous dump to another database (e.g. the live database)
mongorestore -h your.target.database.host -d database-name -u your-username -p your-password dump/wifinder

# connect to the external database through mongo shell
mongo your.target.database.host/database-name -u your-username -p your-password

# check the database as usual
show collections
db.locations.find().pretty()
