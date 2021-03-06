﻿define(
   ({
    _widgetLabel: "คำถาม",
    executeQueryTip: "คลิกเลือกหนึ่งข้อมูลจากข้อมูลเหล่านี้ เพื่อทำการสร้างคำถาม",
    invalidConfig: "การปรับตั้งค่าไม่ถูกต้อง โปรดเลือกที่หน้าการตั้งค่าการตั้งคำถามเพื่อแก้ไขการปรับตั้งค่าให้ถูกต้อง",
    queryParams: "ตัวเลือก",
    parameters: "ตัวเลือก",
    queries: "การตั้งคำถาม",
    apply: "ใช้งาน",
    queryResults: "ผลลัพธ์",
    clear: "ลบ",
    noResults: "ไม่มีผลลัพธ์",
    queryError: "คำถามล้มเหลว!",
    numberFound: "จำนวนของฟีเจอร์ที่ค้นพบ",
    mapExtentTip: "จำกัดผลลัพธ์ไปยังพื้นที่ที่แผนที่ปัจจุบัน",
    noValue: "ไม่มีค่า",
    and: "และ",
    stringOperatorIs: "เป็น", // e.g. <stringFieldName> is 'California'
    stringOperatorIsNot: "ไม่เป็น",
    stringOperatorStartsWith: "เริ่มด้วย",
    stringOperatorEndsWith: "จบด้วย",
    stringOperatorContains: "รวมด้วย",
    stringOperatorDoesNotContain: "ไม่รวมด้วย",
    stringOperatorIsBlank: "ว่าง",
    stringOperatorIsNotBlank: "ไม่ว่าง",
    dateOperatorIsOn: "ที่อยู่บน", // e.g. <dateFieldName> is on '1/1/2012'
    dateOperatorIsNotOn: "ที่ไม่อยู่บน",
    dateOperatorIsBefore: "แต่ก่อน",
    dateOperatorIsAfter: "ที่หลัง",
    dateOperatorDays: "วัน",
    dateOperatorWeeks: "สัปดาห์", // e.g. <dateFieldName> is the last 4 weeks
    dateOperatorMonths: "เดือน",
    dateOperatorInTheLast: "ในที่สุด",
    dateOperatorNotInTheLast: "ไม่ที่สุด",
    dateOperatorIsBetween: "ระหว่าง",
    dateOperatorIsNotBetween: "ไม่ระหว่าง",
    dateOperatorIsBlank: "ว่าง",
    dateOperatorIsNotBlank: "ไม่ว่าง",
    numberOperatorIs: "เป็น", // e.g. <numberFieldName> is 1000
    numberOperatorIsNot: "ไม่เป็น",
    numberOperatorIsAtLeast: "อย่างน้อย",
    numberOperatorIsLessThan: "น้อยกว่า",
    numberOperatorIsAtMost: "มาก",
    numberOperatorIsGreaterThan: "มากกว่า",
    numberOperatorIsBetween: "ระหว่าง",
    numberOperatorIsNotBetween: "ไม่ระหว่าง",
    numberOperatorIsBlank: "ว่าง",
    numberOperatorIsNotBlank: "ไม่ว่าง",
    operationalLayerTip: "เพิ่มผลลัพธ์เป็นชั้นข้อมูลการทำงาน",
    queryResult: "ผลลัพธ์การค้นหา",
    specifyParamsTip: "กำหนดพารามิเตอร์สำหรับงานนี้",
    useSpatialFilter: "ใช้ตัวกรองทางพื้นที่เพื่อจำกัดขอบเขตฟีเจอร์",
    useCurrentMapExtent: "เฉพาะคุณสมบัติตัดพื้นที่แผนที่ปัจจุบัน",
    drawGraphicOnMap: "เฉพาะฟีเจอร์ที่ตัดกับพื้นที่ที่ผู้ใช้กำหนด",
    specifySpatialFilterMsg: "โปรดกำนหดตัวกรองทางพื้นที่สำหรับงานนี้",
    clearResults: "ล้างการแสดงผล",
    operationalTip: 'ด้วยตัวเลือกนี้การตรวจสอบ ผลลัพธ์ที่ได้จะถูกเก็บไว้ที่แผนที่จนกระทั่ง \"${clearResults}\" คลิกที่ปุ่ม',
    noneQueryTip: "ไม่มีการสอบถามข้อมูล (Query Task) ถูกกำหนดไว้ในเครื่องมือวิจเก็ตนี้",
    noPermissionsMsg: "คุณไม่ได้รับอนุญาตให้เข้าใช้เซอร์วิสนี้",
    attributesFromRelationship: "ข้อมูลเชิงบรรยายจากตารางที่สัมพันธ์กัน",
    tasks: "งาน",
    applySpatialFilterToLimitResults: "ใช้ตัวกรองเชิงพื้นที่เพื่อจำกัดผลลัพธ์",
    useCurrentExtentTip: "บางส่วนหรือทั้งหมดที่อยู่ภายในขอบเขตแผนที่ปัจจุบัน",
    useDrawGraphicTip: "บางส่วนหรือทั้งหมดที่อยู่ภายในภาพบนแผนที่",
    useFeaturesTip: "ขึ้นอยู่กับตำแหน่งที่ตั้งที่สัมพันธ์กับลักษณะการทำงานในเลเยอร์อื่น",
    noSpatialLimitTip: "ไม่จำกัดผลการค้นหาตำแหน่ง",
    applySearchDistance: "ค้นหาโดยใช้ระยะทาง",
    spatialRelationship: "ความสัมพันธ์เชิงพื้นที่",
    relatedLayer: "เลเยอร์ที่เกี่ยวข้อง",
    bufferDistance: "ระยะทางขยายออกไป",
    miles: "ไมล์",
    kilometers: "กิโลเมตร",
    feet: "ฟุต",
    meters: "เมตร",
    yards: "หลา",
    nauticalMiles: "ไมล์ทะเล",
    back: "กลับ",
    execute: "ปฏิบัติ"
  })
);