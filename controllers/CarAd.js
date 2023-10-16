const Ad =require ("../models/carAd.js")
let counts = [];
let ads=[]
let mercedes,
  acura,
  alm,
  amc,
  aston,
  audi,
  austin,
  bentley,
  bmw,
  bricklin,
  bugatti,
  buick,
  cadillac,
  chevrolet,
  chrysler,
  daewoo,
  daihatsu,
  dodge,
  datsun,
  eagle,
  ferrari,
  fiat,
  genesis,
  geo,
  honda,
  hummer,
  hyundai,
  infiniti,
  isuzu,
  jaguar,
  jeep,
  kia,
  lamborghini,
  land,
  lexus,
  ford,
  lincoln,
  lotus,
  maserati,
  maybach,
  mazda,
  mcLaren,
  mercury,
  mg,
  mini,
  mitsubishi,
  nissan,
  oldsmobile,
  opel,
  peugeot,
  plymouth,
  polestar,
  pontiac,
  gmc,
  porsche,
  ram,
  renault,
  saab,
  saturn,
  scion,
  shelby,
  smart,
  subaru,
  suzuki,
  toyota,
  tesla,
  triumph,
  volvo,
  volkswagen;

 const addAd = async (req, res, next) => {
  try {
    const newAd = new Ad({ ...req.body });
    const savedAd = await newAd.save();
    res.status(200).json(savedAd);
  } catch (e) {
    res.json({ e });
  }
};
 const getalladds = async (req, res, next) => {
  try {
    if(req.params.location==="Canada")
    {
      const ads = await Ad.find()
      res.status(200).json(ads);
    }
    else
    {
      const ads = await Ad.find({location:req.params.location})
      res.status(200).json(ads);
    }
  } catch (e) {
    res.json({ e });
  }
};
 const getAds = async (req, res, next) => {
  try {
    const ads = await Ad.find()
      .skip(req.params.page * 10 - 10)
      .limit(10);
    res.status(200).json(ads);
  } catch (e) {
    res.json({ e });
  }
};
 const getSingleAd = async (req, res, next) => {
  try {
    const ad = await Ad.findById(req.params.id);
    res.status(200).json(ad);
  } catch (e) {
    res.json({ e });
  }
};
 const deleteAd = async (req, res, next) => {
  try {
    await Ad.findByIdAndDelete(req.params.id);
    res.status(200).json("Ad has been deleted successfully");
  } catch (e) {
    res.json({ e });
  }
};
 const findnmbers = async (req, res, next) => {
try 
{
  const num = await Ad.find({ make: { $regex: req.params.q, $options: "i" } });
  res.status(200).json(num.length);
}
catch(e)
{
  res.json({ e });
}
};
 const getbasedonmake = async (req, res, next) => {
 try 
 {
  if(req.params.location==="Canada")
  {
    const results = await Ad.find({
      make: { $regex: req.params.make, $options: "i" },
    });
    res.status(200).json(results);
  }
  else 
  {
    const results = await Ad.find({
      make: { $regex: req.params.make, $options: "i" }, location:req.params.location
    });
    res.status(200).json(results);
  }
 }
 catch(e)
 {
  res.json({ e });
 }
};
 const getallrecords = async (req, res, next) => {
try 
{
  const results = await Ad.find({});
  res.status(200).json(results);
}
catch(e)
{
  res.json({ e });
}
};
 const findnmbersbasedontransmission = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    const num = await Ad.find({
      transmission: { $regex: req.params.q, $options: "i" },
    });
    res.status(200).json(num.length);
  }
  else 
  {
    const num = await Ad.find({
      transmission: { $regex: req.params.q, $options: "i" }, location:req.params.location
    });
    res.status(200).json(num.length);
  }
}
catch(e)
{
  res.json({ e });
}
};
 const findbasedoncondition = async (req, res, next) => {
  try 
  {
    let num;
    if(req.params.location==="Canada")
    {
      req.params.q === "any"
      ? (num = await Ad.find())
      : (num = await Ad.find({
          condition: { $regex: req.params.q, $options: "i" },
        }));
    res.status(200).json(num.length);
    }
    else 
    {
      req.params.q === "any"
      ? (num = await Ad.find({location:req.params.location}))
      : (num = await Ad.find({
          condition: { $regex: req.params.q, $options: "i" },location:req.params.location
        }));
    res.status(200).json(num.length);
    }
  }
  catch(e)
  {
    res.json({ e });
  }
};
 const fetchbasedoncondition = async (req, res, next) => {
 try 
 {
  let num;
  if(req.params.location==="Canada")
  {
    req.params.q === "any"
    ? (num = await Ad.find())
    : (num = await Ad.find({
        condition: { $regex: req.params.q, $options: "i" },
      }));
  res.status(200).json(num);
  }
  else
  {
    req.params.q === "any"
    ? (num = await Ad.find({location:req.params.location}))
    : (num = await Ad.find({
        condition: { $regex: req.params.q, $options: "i" }, location:req.params.location
      }));
  res.status(200).json(num);
  }
 }
 catch(e)
 {
  res.json({ e });
 }
};

 const findnmbersbasedonfuel = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    let num = await Ad.find({
      fuelType: { $regex: req.params.q, $options: "i" },
    });
    res.status(200).json(num.length);
  }
  else 
  {
    let num = await Ad.find({
      fuelType: { $regex: req.params.q, $options: "i" }, location:req.params.location
    });
    res.status(200).json(num.length);
  }
}
catch(e)
{
  res.json({ e });
}
};

 const findcolors = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    const num = await Ad.find({ color: { $regex: req.params.q, $options: "i" } });
    res.status(200).json(num.length);
  }
  else 
  {
    const num = await Ad.find({ color: { $regex: req.params.q, $options: "i" },location: req.params.location});
    res.status(200).json(num.length);
  }
}
catch(e)
{
  res.json({ e });
}
};
 const getNewCars = async (req, res, next) => {
  try {
    const latest_records = await Ad.find({ condition: "new" });
    res.status(200).json(latest_records);
  } catch (e) {
    res.json({ error: e });
  }
};
 const getUsedCars = async (req, res, next) => {
  try {
    const latest_records = await Ad.find({ condition: "used" });
    res.status(200).json(latest_records);
  } catch (e) {
    res.json({ error: e });
  }
};
 const getLatestAds = async (req, res, next) => {
  try {
    const latest_records = await Ad.find().sort({ createdAt: -1 });
    res.status(200).json(latest_records);
  } catch (e) {
    res.json({ error: e });
  }
};
 const getOldestAds = async (req, res, next) => {
  try {
    const latest_records = await Ad.find().sort({ createdAt: 1 });
    res.status(200).json(latest_records);
  } catch (e) {
    res.json({ error: e });
  }
};
 const highestPriceFirst = async (req, res, next) => {
  try {
    const latest_records = await Ad.find().sort({ price: -1 });
    res.status(200).json(latest_records);
  } catch (e) {
    res.json({ error: e });
  }
};
 const lowestPriceFirst = async (req, res, next) => {
  try {
    const latest_records = await Ad.find().sort({ price: 1 });
    res.status(200).json(latest_records);
  } catch (e) {
    res.json({ error: e });
  }
};

 const fetchBasedOnColor = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    const results = await Ad.find({
      color: { $regex: req.params.color, $options: "i" },
    });
    res.status(200).json(results);
  }
  else 
  {
    const results = await Ad.find({
      color: { $regex: req.params.color, $options: "i" }, location: req.params.location
    });
    res.status(200).json(results);
  }
}
catch(e)
{
  res.json({ error: e });
}
};
 const ftechCounts = async (req, res, next) => {
  let brands = [
    { brand: "mercedes" },

    { brand: "acura" },

    { brand: "alm" },

    { brand: "amc" },

    { brand: "aston" },

    { brand: "audi" },

    { brand: "austin" },

    { brand: "bentley" },

    { brand: "bmw" },

    { brand: "bricklin" },

    { brand: "bugatti" },

    { brand: "buick" },

    { brand: "cadillac" },

    { brand: "chevrolet" },

    { brand: "chrysler" },

    { brand: "daewoo" },

    { brand: "daihatsu" },

    { brand: "dodge" },

    { brand: "datsun" },

    { brand: "eagle" },

    { brand: "ferrari" },

    { brand: "fiat" },

    { brand: "genesis" },

    { brand: "geo" },

    { brand: "gmc" },

    { brand: "honda" },

    { brand: "hummer" },

    { brand: "hyundai" },

    { brand: "infiniti" },

    { brand: "isuzu" },

    { brand: "jaguar" },

    { brand: "jeep" },

    { brand: "kia" },

    { brand: "lamborghini" },

    { brand: "land" },

    { brand: "lexus" },

    { brand: "ford" },

    { brand: "lincoln" },

    { brand: "lotus" },

    { brand: "maserati" },

    { brand: "maybach" },

    { brand: "mazda" },

    { brand: "mcLaren" },

    { brand: "mercury" },

    { brand: "mg" },

    { brand: "mini" },

    { brand: "mitsubishi" },

    { brand: "nissan" },

    { brand: "oldsmobile" },

    { brand: "opel" },

    { brand: "peugeot" },

    { brand: "plymouth" },

    { brand: "polestar" },

    { brand: "pontiac" },

    { brand: "porsche" },

    { brand: "ram" },

    { brand: "renault" },

    { brand: "saab" },

    { brand: "saturn" },

    { brand: "scion" },

    { brand: "shelby" },

    { brand: "smart" },

    { brand: "subaru" },

    { brand: "suzuki" },

    { brand: "toyota" },

    { brand: "tesla" },

    { brand: "triumph" },

    { brand: "volvo" },

    { brand: "volkswagen" },
  ];

  try {
    brands.forEach((brand) => {
      const fun = async () => {
        let count
        if(req.params.location==="Canada")
        {
           count = await Ad.find({
            make: { $regex: brand.brand, $options: "i" },
          });
        }
        else 
        {
           count = await Ad.find({
            make: { $regex: brand.brand, $options: "i" },location:req.params.location
          });
        }
        switch (brand.brand) {
          case "mercury":
            mercury = count.length;
            break;
          case "volkswagen":
            volkswagen = count.length;
            break;
          case "volvo":
            volvo = count.length;
            break;
          case "subaru":
            subaru = count.length;
            break;
          case "suzuki":
            suzuki = count.length;
            break;
          case "toyota":
            toyota = count.length;
            break;
          case "saab":
            saab = count.length;
            break;
          case "tesla":
            tesla = count.length;
            break;
          case "saab":
            saab = count.length;
            break;
          case "saab":
            saab = count.length;
            break;
          case "triumph":
            triumph = count.length;
            break;
          case "saturn":
            saturn = count.length;
            break;
          case "peugeot":
            peugeot = count.length;
            break;
          case "scion":
            scion = count.length;
            break;
          case "smart":
            smart = count.length;
            break;
          case "shelby":
            shelby = count.length;
            break;
          case "peugeot":
            peugeot = count.length;
            break;
          case "plymouth":
            plymouth = count.length;
            break;
          case "polestar":
            polestar = count.length;
            break;
          case "pontiac":
            pontiac = count.length;
            break;
          case "porsche":
            porsche = count.length;
            break;
          case "ram":
            ram = count.length;
            break;
          case "mcLaren":
            mcLaren = count.length;
            break;
          case "renault":
            renault = count.length;
            break;
          case "mazda":
            mazda = count.length;
            break;
          case "mg":
            mg = count.length;
            break;
          case "mini":
            mini = count.length;
            break;
          case "nissan":
            nissan = count.length;
            break;
          case "mitsubishi":
            mitsubishi = count.length;
            break;
          case "oldsmobile":
            oldsmobile = count.length;
            break;
          case "opel":
            opel = count.length;
            break;
          case "jaguar":
            jaguar = count.length;
            break;
          case "jeep":
            jeep = count.length;
            break;
          case "kia":
            kia = count.length;
            break;
          case "lamborghini":
            lamborghini = count.length;
            break;
          case "land":
            land = count.length;
            break;
          case "lexus":
            lexus = count.length;
            break;
          case "ford":
            ford = count.length;
            break;
          case "lincoln":
            lincoln = count.length;
            break;
          case "lotus":
            lotus = count.length;
            break;
          case "maserati":
            maserati = count.length;
            break;
          case "maybach":
            maybach = count.length;
            break;
          case "isuzu":
            isuzu = count.length;
            break;
          case "infiniti":
            infiniti = count.length;
            break;
          case "hyundai":
            hyundai = count.length;
            break;
          case "hummer":
            hummer = count.length;
            break;
          case "gmc":
            gmc = count.length;
            break;
          case "honda":
            honda = count.length;
            break;
          case "mercedes":
            mercedes = count.length;
            break;
          case "acura":
            acura = count.length;
            break;
          case "alm":
            alm = count.length;
            break;
          case "amc":
            amc = count.length;
            break;
          case "aston":
            aston = count.length;
            break;
          case "audi":
            audi = count.length;
            break;
          case "austin":
            austin = count.length;
            break;
          case "bentley":
            bentley = count.length;
            break;
          case "bmw":
            bmw = count.length;
            break;
          case "bricklin":
            bricklin = count.length;
            break;
          case "bugatti":
            bugatti = count.length;
            break;
          case "buick":
            buick = count.length;
            break;
          case "datsun":
            datsun = count.length;
            break;
          case "eagle":
            eagle = count.length;
            break;
          case "genesis":
            genesis = count.length;
            break;
          case "bentley":
            bentley = count.length;
            break;
          case "geo":
            geo = count.length;
            break;
          case "fiat":
            fiat = count.length;
            break;
          case "ferrari":
            ferrari = count.length;
            break;
          case "cadillac":
            cadillac = count.length;
            break;
          case "chevrolet":
            chevrolet = count.length;
            break;
          case "chrysler":
            chrysler = count.length;
            break;
          case "daewoo":
            daewoo = count.length;
            break;
          case "datsun":
            chevrolet = count.length;
            break;
          case "dodge":
            dodge = count.length;
            break;
          case "daihatsu":
            daihatsu = count.length;
            break;
          default:
            break;
        }
      };
      fun();
    });

    res
      .status(200)
      .json({
        mercedes,
        acura,
        alm,
        amc,
        aston,
        audi,
        gmc,
        austin,
        bentley,
        bmw,
        bricklin,
        bugatti,
        buick,
        cadillac,
        chevrolet,
        chrysler,
        daewoo,
        daihatsu,
        dodge,
        datsun,
        eagle,
        ferrari,
        fiat,
        genesis,
        geo,
        honda,
        hummer,
        hyundai,
        infiniti,
        isuzu,
        jaguar,
        jeep,
        kia,
        lamborghini,
        land,
        lexus,
        ford,
        lincoln,
        lotus,
        maserati,
        maybach,
        mazda,
        mcLaren,
        mercury,
        mg,
        mini,
        mitsubishi,
        nissan,
        oldsmobile,
        opel,
        peugeot,
        plymouth,
        polestar,
        pontiac,
        porsche,
        ram,
        renault,
        saab,
        saturn,
        scion,
        shelby,
        smart,
        subaru,
        suzuki,
        toyota,
        tesla,
        triumph,
        volvo,
        volkswagen,
      });
  } catch (e) {
    res.json({ error: e });
  }
  counts = [];
};
 const fetchBasedOnTransmission = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    const latest_records = await Ad.find({
      transmission: req.params.transmission,
    });
    res.status(200).json(latest_records);
  }
  else 
  {
    const latest_records = await Ad.find({
      transmission: req.params.transmission, location:req.params.location
    });
    res.status(200).json(latest_records);
  }
}
catch(e)
{
  res.json({ error: e });
}
};
 const fetchBasedOnFuelType = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    const latest_records = await Ad.find({ fuelType: req.params.fueltype });
    res.status(200).json(latest_records);
  }
  else 
  {
    const latest_records = await Ad.find({ fuelType: req.params.fueltype, location: req.params.location });
    res.status(200).json(latest_records);
  }
}
catch(e)
{
  res.json({ error: e });
}
};
 const fetchBasedOnGivenKilometers = async (req, res, next) => {
try 
{
  const latest_records = await Ad.find({
    kilometers: { $gte: req.params.k1, $lte: req.params.k2 },
  });
  res.status(200).json(latest_records);
}
catch(e)
{
  res.json({ error: e });
}
};
 const fetchBasedOnGivenPrice = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    const latest_records = await Ad.find({
      price: { $gte: req.params.first, $lte: req.params.second }
    });
    res.status(200).json(latest_records);
  }
  else 
  {
    const latest_records = await Ad.find({
      price: { $gte: req.params.first, $lte: req.params.second },location:req.params.location
    });
    res.status(200).json(latest_records);
  }
}
catch(e)
{
  res.json({ error: e });
}
};
 const fetchBasedOnGivenYear = async (req, res, next) => {
try 
{
  if(req.params.location==="Canada")
  {
    const latest_records = await Ad.find({
      year: { $gte: req.params.first, $lte: req.params.second }
    });
    res.status(200).json(latest_records);
  }
  else 
  {
    const latest_records = await Ad.find({
      year: { $gte: req.params.first, $lte: req.params.second },location:req.params.location
    });
    res.status(200).json(latest_records);
  }
}
catch(e)
{
  res.json({ error: e });
}
};
 const fetchbasedonevents = async (req, res, next) => {
try 
{
  if(req.params.event==="kilometers")
  {
    const latest_records = await Ad.find({
      kilometers: { $gte: req.params.first, $lte: req.params.second },
    });
    ads.push(latest_records)
    res.status(200).json(ads);
  }

  else if(req.params.event==="price")
  {
    const latest_records = await Ad.find({
      price: { $gte: req.params.first, $lte: req.params.second },
    });
    ads.push(latest_records)
    res.status(200).json(ads);
  }

  else 
  {
    const latest_records = await Ad.find({
      year: { $gte: req.params.first, $lte: req.params.second },
    });
    ads.push(latest_records)
    res.status(200).json(ads);
  }
}
catch(e)
{
  res.json({ error: e });
}
};
 const fetchbasedonvalues = async (req,res)=>
{
  try 
  {
const records=await Ad.find({}).skip(Math.abs(req.params.start)).limit(10)
res.status(200).json(records)
  }
  catch(e)
  {
    res.status(500).json({"Error":e})
  }
}


module.exports={
  addAd,
getalladds,
getAds,
getSingleAd,
deleteAd,
findnmbers,
getbasedonmake,
getallrecords,
findnmbersbasedontransmission,
findbasedoncondition,
fetchbasedoncondition,
findnmbersbasedonfuel,
findcolors,
getNewCars,
getUsedCars,
getLatestAds,
getOldestAds,
highestPriceFirst,
lowestPriceFirst,
fetchBasedOnColor,
ftechCounts,
fetchBasedOnTransmission,
fetchBasedOnFuelType,
fetchBasedOnGivenKilometers,
fetchBasedOnGivenPrice,
fetchBasedOnGivenYear,
fetchbasedonevents,
fetchbasedonvalues
}