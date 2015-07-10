var bmiService = {}; // declare a new empty object.
bmiService.HeightInCM = 170;
bmiService.WeightInKG = 65;

bmiService.getQualify = function()
{
    var height = this.HeightInCM / 100;
    var bmi = this.WeightInKG / Math.pow(height, 2);
	return bmi;
}

console.log(bmiService.getQualify());

var bmiService2 =
{
    HeightInCM: 170,
	WeightInKG: 65,
	
	getQualify: function()
	{
		var height = this.HeightInCM / 100;
		var bmi = this.WeightInKG / Math.pow(height, 2);
		return bmi;
	}
};

console.log(bmiService2.getQualify());