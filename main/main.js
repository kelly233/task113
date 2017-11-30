module.exports = function TaxiFee(waitTime,mileage) {
    let fee = 0;
    if(mileage <= 2){fee += 6;}
    if(mileage <= 8){fee = 6 + (mileage - 2) * 0.8;}
    if(mileage > 8){fee = 10.8 + 1.2 * (mileage - 8);}
    fee += waitTime * 0.25;
    return "==========================\n" +
        "乘车明细\n" +
        "==========================\n" +
        "亲爱的乘客您好！\n" +
        "您本次乘车的里程数为"+ mileage + "公里，\n" +
        "等待时间为" + waitTime + "分钟，\n" +
        "乘车费用为" +  Math.ceil(fee) + "元。\n" +
        "祝您旅途愉快！\n" +
        "-------------------------------------------";
};