function BMIService(heightInCM, weightInKG)
{
    // private member.
	var heightInMeter = 0;
	var bmi = 0.0;
	var resolvers = [];
		
	resolvers.push(new LessQualifyResolver());
	resolvers.push(new HeavyFatQualifyResolver());
	resolvers.push(new NormalQualifyResolver());
	resolvers.push(new LightFatQualifyResolver());
	resolvers.push(new HigherWeightQualifyResolver());
	resolvers.push(new FatQualifyResolver());

    // public property.
    this.HeightInCM = heightInCM; 
	this.WeightInKG = weightInKG;
	
	// public method.
	this.getQualify = function()
	{
	    console.log(this); // "this" means customized object.
	    bmi = calc2((this.HeightInCM / 100), this.WeightInKG);
		return bmi;
	};
	
	this.getQualifyResult = function()
	{
		for (var i = 0; i < resolvers.length; i++)
		{
		    var resolver = resolvers[i];
		    if (resolver.IsValid(bmi))
				return resolver.GetResult();
		}
	};
	
	// private method.
	function calc()
	{
	    console.log(this); // "this" means window object, not customized object.
		heightInMeter = this.HeightInCM / 100;
		var bmi = this.WeightInKG / Math.pow(heightInMeter, 2);
		return bmi;
	}
	
	function calc2(height, weight)
	{
		return weight / Math.pow(height, 2);
	}

}

function BMIQualifyResolver() {
    this.IsValid = function(bmi) { return false; }
	this.GetResult = function() { return "Unknown"; }
}

function LessQualifyResolver() {}
LessQualifyResolver.prototype = new BMIQualifyResolver();
LessQualifyResolver.prototype.IsValid = function(bmi) { return (bmi < 18.5); }
LessQualifyResolver.prototype.GetResult = function() { return "Less"; }

function HeavyFatQualifyResolver() {}
HeavyFatQualifyResolver.prototype = new BMIQualifyResolver();
HeavyFatQualifyResolver.prototype.IsValid = function(bmi) { return (bmi >= 35); }
HeavyFatQualifyResolver.prototype.GetResult = function() { return "HeavyFat"; }

function NormalQualifyResolver() {}
NormalQualifyResolver.prototype = new BMIQualifyResolver();
NormalQualifyResolver.prototype.IsValid = function(bmi) { return (bmi >= 18.5 && bmi < 24); }
NormalQualifyResolver.prototype.GetResult = function() { return "Normal"; }

function HigherWeightQualifyResolver() {}
HigherWeightQualifyResolver.prototype = new BMIQualifyResolver();
HigherWeightQualifyResolver.prototype.IsValid = function(bmi) { return (bmi >= 24 && bmi < 27); }
HigherWeightQualifyResolver.prototype.GetResult = function() { return "HigherWeight"; }

function LightFatQualifyResolver() {}
LightFatQualifyResolver.prototype = new BMIQualifyResolver();
LightFatQualifyResolver.prototype.IsValid = function(bmi) { return (bmi >= 27 && bmi < 30); }
LightFatQualifyResolver.prototype.GetResult = function() { return "LightFat"; }

function FatQualifyResolver() {}
FatQualifyResolver.prototype = new BMIQualifyResolver();
FatQualifyResolver.prototype.IsValid = function(bmi) { return (bmi >= 30 && bmi < 35); }
FatQualifyResolver.prototype.GetResult = function() { return "Fat"; }