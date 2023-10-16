import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brand:{mercedes:"" ,acura:"" ,alm:"" ,amc:"" ,aston:"" ,audi:"" ,austin:"" ,bentley:"" ,bmw:"" ,bricklin:"" ,bugatti:"" ,buick:"" ,
        cadillac:"" ,chevrolet:"" ,chrysler:"" ,daewoo:"" ,daihatsu:"" ,dodge:"" ,datsun:"" ,eagle:"" ,ferrari:"" ,fiat:"" ,genesis:"" ,geo:"" ,honda:"",hummer:"" ,hyundai:"" ,infiniti:"" ,isuzu:"" ,jaguar:"" 
        ,jeep:"" ,kia:"" ,lamborghini:"" ,land:"" ,lexus:"" ,ford:"" ,lincoln:"" ,lotus:"" ,maserati:"" ,maybach:"" ,mazda:"" ,mcLaren:"" ,mercury:"" ,mg:"" ,mini:"" ,mitsubishi:"" ,nissan:"" ,oldsmobile:"" 
        ,opel:"" ,peugeot:"" ,plymouth:"" ,polestar:"" ,pontiac:"" ,gmc:"",porsche:"" ,ram:"" ,renault:"" ,saab:"" ,saturn:"" ,scion:"" ,shelby:"" ,smart:"" ,subaru:"" ,suzuki:"" ,toyota:"" ,tesla:"" ,triumph:"" ,volvo:"" ,volkswagen:""}
}

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        changemercedes:(state,action)=>
        {
            state.brand.mercedes=action.payload
        
        },
        changeopel:(state,action)=>
        {
            state.brand.opel=action.payload
        
        },
        changepeugeot:(state,action)=>
        {
            state.brand.peugeot=action.payload
        
        },
        changeplymouth:(state,action)=>
        {
            state.brand.plymouth=action.payload
        
        },
        changepolestar:(state,action)=>
        {
            state.brand.polestar=action.payload
        
        },
        changepontiac:(state,action)=>
        {
            state.brand.pontiac=action.payload
        
        },
        changegmc:(state,action)=>
        {
            state.brand.gmc=action.payload
        
        },
        changeporsche:(state,action)=>
        {
            state.brand.porsche=action.payload
        
        },
        changeram:(state,action)=>
        {
            state.brand.ram=action.payload
        
        },
        changerenault:(state,action)=>
        {
            state.brand.renault=action.payload
        
        },
        changesaab:(state,action)=>
        {
            state.brand.saab=action.payload
        
        },
        changesaturn:(state,action)=>
        {
            state.brand.saturn=action.payload
        
        },
        changescion:(state,action)=>
        {
            state.brand.scion=action.payload
        
        },
        changeshelby:(state,action)=>
        {
            state.brand.shelby=action.payload
        
        },
        changealm:(state,action)=>
        {
            state.brand.alm=action.payload
        
        },
        changeamc:(state,action)=>
        {
            state.brand.amc=action.payload
        
        },
        changeaston:(state,action)=>
        {
            state.brand.aston=action.payload
        
        },
        changeaudi:(state,action)=>
        {
            state.brand.audi=action.payload
        
        },
        changeaustin:(state,action)=>
        {
            state.brand.austin=action.payload
        
        },
        changebentley:(state,action)=>
        {
            state.brand.bentley=action.payload
        
        },
        changebmw:(state,action)=>
        {
            state.brand.bmw=action.payload
        
        },
        changebricklin:(state,action)=>
        {
            state.brand.bricklin=action.payload
        
        },
        changebugatti:(state,action)=>
        {
            state.brand.bugatti=action.payload
        
        },        changecadillac:(state,action)=>
        {
            state.brand.cadillac=action.payload
        
        },
        changebuick:(state,action)=>
        {
            state.brand.buick=action.payload
        
        },
        changechevrolet:(state,action)=>
        {
            state.brand.chevrolet=action.payload
        
        },
        changechrysler:(state,action)=>
        {
            state.brand.chrysler=action.payload
        
        },
        changedaewoo:(state,action)=>
        {
            state.brand.daewoo=action.payload
        
        },
        changedaihatsu:(state,action)=>
        {
            state.brand.daihatsu=action.payload
        
        },
        changedodge:(state,action)=>
        {
            state.brand.dodge=action.payload
        
        },
        changedatsun:(state,action)=>
        {
            state.brand.datsun=action.payload
        
        },
        changeeagle:(state,action)=>
        {
            state.brand.eagle=action.payload
        
        },
        changeferrari:(state,action)=>
        {
            state.brand.ferrari=action.payload
        
        },
        changefiat:(state,action)=>
        {
            state.brand.fiat=action.payload
        
        },
        changegenesis:(state,action)=>
        {
            state.brand.genesis=action.payload
        
        },
        changegeo:(state,action)=>
        {
            state.brand.geo=action.payload
        
        },
        changehonda:(state,action)=>
        {
            state.brand.honda=action.payload
        
        },
        changehummer:(state,action)=>
        {
            state.brand.hummer=action.payload
        
        },
        changehyundai:(state,action)=>
        {
            state.brand.hyundai=action.payload
        
        },
        changeinfiniti:(state,action)=>
        {
            state.brand.infiniti=action.payload
        
        },
        changeisuzu:(state,action)=>
        {
            state.brand.isuzu=action.payload
        
        },
        changejaguar:(state,action)=>
        {
            state.brand.jaguar=action.payload
        
        },
        changejeep:(state,action)=>
        {
            state.brand.jeep=action.payload
        
        },
        changekia:(state,action)=>
        {
            state.brand.kia=action.payload
        
        },
        changelamborghini:(state,action)=>
        {
            state.brand.lamborghini=action.payload
        
        },
        changeland:(state,action)=>
        {
            state.brand.land=action.payload
        
        },
        changelotus:(state,action)=>
        {
            state.brand.lotus=action.payload
        
        },
        changealexus:(state,action)=>
        {
            state.brand.lexus=action.payload
        
        },
        changeford:(state,action)=>
        {
            state.brand.ford=action.payload
        
        },
        changelincoln:(state,action)=>
        {
            state.brand.lincoln=action.payload
        
        },
        changemaserati:(state,action)=>
        {
            state.brand.maserati=action.payload
        
        },
        changemaybach:(state,action)=>
        {
            state.brand.maybach=action.payload
        
        },
        changemazda:(state,action)=>
        {
            state.brand.mazda=action.payload
        
        },
        changemcLaren:(state,action)=>
        {
            state.brand.mcLaren=action.payload
        
        },
        changemercury:(state,action)=>
        {
            state.brand.mercury=action.payload
        
        },
        changemini:(state,action)=>
        {
            state.brand.mini=action.payload
        
        },
        changeoldsmobile:(state,action)=>
        {
            state.brand.oldsmobile=action.payload
        
        },
        changemitsubishi:(state,action)=>
        {
            state.brand.mitsubishi=action.payload
        
        },
        changenissan:(state,action)=>
        {
            state.brand.nissan=action.payload
        
        },
        changemg:(state,action)=>
        {
            state.brand.mg=action.payload
        
        },
        changesmart:(state,action)=>
        {
            state.brand.smart=action.payload
        
        },
        changesubaru:(state,action)=>
        {
            state.brand.subaru=action.payload
        
        },
        changesuzuki:(state,action)=>
        {
            state.brand.suzuki=action.payload
        
        },
        changetoyota:(state,action)=>
        {
            state.brand.toyota=action.payload
        
        },
        changetesla:(state,action)=>
        {
            state.brand.tesla=action.payload
        
        },
        changeacura:(state,action)=>
        {
            state.brand.acura=action.payload
        
        },
        changevolkswagen:(state,action)=>
        {
            state.brand.volkswagen=action.payload
        
        },        
        changevolvo:(state,action)=>
        {
            state.brand.volvo=action.payload
        
        },   
        changetriumph:(state,action)=>
        {
            state.brand.triumph=action.payload
        
        }    
}})
  export const {changemercedes,
    changeopel,
    changepeugeot,
    changeplymouth,
    changepolestar,
    changepontiac,
    changegmc,
    changeporsche,
    changeram,
    changerenault,
    changesaab,
    changesaturn,
    changescion,
    changeshelby,
    changealm,
    changeamc,
    changeaston,
    changeaudi,
    changeaustin,
    changebentley,
    changebmw,
    changebricklin,
    changebugatti,
    changecadillac,
    changebuick,
    changechevrolet,
    changechrysler,
    changedaewoo,
    changedaihatsu,
    changedodge,
    changedatsun,
    changeeagle,
    changeferrari,
    changefiat,
    changegenesis,
    changegeo,
    changehonda,
    changehummer,
    changehyundai,
    changeinfiniti,
    changeisuzu,
    changejaguar,
    changejeep,
    changekia,
    changelamborghini,
    changeland,
    changealexus,
    changeford,
    changelincoln,
    changemaserati,
    changemaybach,
    changemazda,
    changemcLaren,
    changemercury,
    changemini,
    changeoldsmobile,
    changemitsubishi,
    changenissan,
    changemg,
    changesmart,
    changesubaru,
    changesuzuki,
    changetoyota,
    changetesla,
    changeacura,
    changevolkswagen,
    changevolvo,
    changetriumph,
    changelotus} = brandSlice.actions

export default brandSlice.reducer