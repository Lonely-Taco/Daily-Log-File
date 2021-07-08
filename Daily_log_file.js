(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Daily_log_file_atlas_1", frames: [[0,0,1500,1200]]},
		{name:"Daily_log_file_atlas_2", frames: [[0,0,1500,1200]]},
		{name:"Daily_log_file_atlas_3", frames: [[524,1024,407,225],[933,1024,220,375],[524,1251,220,375],[0,1024,522,242],[0,1268,220,375],[222,1268,220,375],[1114,0,220,375],[1114,377,220,375],[1155,754,220,375],[1336,0,220,375],[1336,377,220,375],[1155,1131,220,375],[746,1401,220,375],[444,1628,220,375],[0,1645,220,375],[222,1645,220,375],[968,1508,220,375],[1190,1508,220,375],[1377,754,220,375],[1558,0,220,375],[1558,377,220,375],[1377,1131,220,375],[1412,1508,220,375],[1599,754,220,375],[1599,1131,220,375],[1634,1508,220,375],[1780,0,220,375],[1780,377,220,375],[1821,754,220,375],[1821,1131,220,375],[0,0,1112,1022]]},
		{name:"Daily_log_file_atlas_4", frames: [[0,0,220,375],[0,377,220,375],[0,754,220,375],[0,1131,220,375],[0,1508,220,375],[222,0,220,375],[222,377,220,375],[222,754,220,375],[222,1131,220,375],[222,1508,220,375],[444,0,220,375],[666,0,220,375],[888,0,220,375],[1110,0,220,375],[1332,0,220,375],[1554,0,220,375],[1776,0,220,375],[444,377,220,375],[444,754,220,375],[444,1131,220,375],[444,1508,220,375],[666,377,220,375],[666,754,220,375],[666,1131,220,375],[666,1508,220,375],[888,377,220,375],[1110,377,220,375],[1332,377,220,375],[1554,377,220,375],[1776,377,220,375],[888,754,220,375],[888,1131,220,375],[888,1508,220,375],[1110,754,220,375],[1332,754,220,375],[1554,754,220,375],[1776,754,220,375],[1110,1131,220,375],[1110,1508,220,375],[1332,1131,220,375],[1332,1508,220,375],[1554,1131,220,375],[1776,1131,220,375],[1554,1508,220,375],[1776,1508,220,375]]},
		{name:"Daily_log_file_atlas_5", frames: [[0,0,220,375],[0,377,220,375],[0,754,220,375],[0,1131,220,375],[0,1508,220,375],[222,0,220,375],[222,377,220,375],[222,754,220,375],[222,1131,220,375],[222,1508,220,375],[444,0,220,375],[666,0,220,375],[888,0,220,375],[1110,0,220,375],[1332,0,220,375],[1554,0,220,375],[1776,0,220,375],[444,377,220,375],[444,754,220,375],[444,1131,220,375],[444,1508,220,375],[666,377,220,375],[666,754,220,375],[666,1131,220,375],[666,1508,220,375],[888,377,220,375],[1110,377,220,375],[1332,377,220,375],[1554,377,220,375],[1776,377,220,375],[888,754,220,375],[888,1131,220,375],[888,1508,220,375],[1110,754,220,375],[1332,754,220,375],[1554,754,220,375],[1776,754,220,375],[1110,1131,220,375],[1110,1508,220,375],[1332,1131,220,375],[1332,1508,220,375],[1554,1131,220,375],[1776,1131,220,375],[1554,1508,220,375],[1776,1508,220,375]]},
		{name:"Daily_log_file_atlas_6", frames: [[0,815,181,55],[0,731,221,82],[687,647,226,286],[676,0,220,323],[183,815,79,55],[209,377,192,352],[0,377,207,338],[684,325,206,320],[444,0,230,333],[444,335,238,318],[0,0,220,375],[222,0,220,375],[403,655,282,238]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_238 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_905 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_251 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_641 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_637 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_248 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_636 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_639 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_638 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_640 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_642 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_635 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_634 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_633 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_631 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_632 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_630 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_629 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_627 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_624 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_622 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_626 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_625 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_628 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_621 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_619 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_623 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_618 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_620 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_617 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_613 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_616 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_615 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_611 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_614 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_610 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_609 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_612 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_606 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_607 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_608 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_604 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_605 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_603 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_602 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_601 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_600 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_599 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_598 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_595 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_596 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_594 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_592 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_597 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_593 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_591 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_590 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_586 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_580 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_581 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_582 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_579 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_584 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_585 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_587 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_583 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_589 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_588 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_578 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_577 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_576 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_573 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_570 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_569 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_568 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_567 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_566 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_571 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_574 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_575 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_565 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_572 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_564 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_563 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_559 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_562 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_561 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_557 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_558 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_560 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_553 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_555 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_552 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_556 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_554 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_551 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_550 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_549 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_546 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_548 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_547 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_543 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_545 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_542 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_541 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_544 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_540 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_539 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_538 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_537 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_536 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_535 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_534 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_533 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_530 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Laag0 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_531 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.printerright = function() {
	this.initialize(ss["Daily_log_file_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek13 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.oldbrownvintageparchmentpapertexture = function() {
	this.initialize(img.oldbrownvintageparchmentpapertexture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2202,3000);


(lib.printerleft = function() {
	this.initialize(ss["Daily_log_file_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_532 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_529 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek15 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_527 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_901 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_526 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_524 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek14 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek12 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek17 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_525 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek16 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek19 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_528 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_523 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek18 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Tween68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek12();
	this.instance.setTransform(-16.3,48.7,0.2594,0.2594,-130.0019);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-48.8,101.69999999999999,97.5);


(lib.Tween66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek13();
	this.instance.setTransform(-43.95,-17.45,0.2595,0.2595,-29.9981);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-46.7,87.9,93.5);


(lib.Tween64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek14();
	this.instance.setTransform(-44.4,-27.1,0.2595,0.2595,-29.9981);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-52,88.8,104);


(lib.Tween62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek15();
	this.instance.setTransform(-18.75,47.05,0.2595,0.2595,-123.9985);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-47.1,101.30000000000001,94.2);


(lib.Tween60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek16();
	this.instance.setTransform(-24.1,46.6,0.2595,0.2595,-117.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-46.6,104.30000000000001,93.2);


(lib.Tween58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek17();
	this.instance.setTransform(12.1,-47.85,0.2595,0.2595,47.0019);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-47.8,97.2,95.69999999999999);


(lib.Tween56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek18();
	this.instance.setTransform(14.65,45.55,0.2594,0.2594,-148.0018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-45.5,94.8,91.1);


(lib.Tween54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rechthoek19();
	this.instance.setTransform(-37.55,-35.2,0.2595,0.2595,-10.0008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-45.9,75.1,92);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.oldbrownvintageparchmentpapertexture();
	this.instance.setTransform(-297,-404,0.2693,0.2693);

	this.instance_1 = new lib.CachedBmp_251();
	this.instance_1.setTransform(-180.95,-190.95,0.4942,0.4942);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-404,593.1,808);


(lib.printer_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_905();
	this.instance.setTransform(80.05,-149.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.1,-149.9,110.5,41);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_238();
	this.instance.setTransform(16,4.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_905();
	this.instance_1.setTransform(-0.45,-0.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,110.5,41);


// stage content:
(lib.Daily_log_file = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,28,149];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		this.stop();
		
		this.turn_page_button.addEventListener("click", turnPage.bind(this));
		
		function turnPage()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_28 = function() {
		this.previous_page_button.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			this.play();
		}
		/**
		this.stop_.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.stop();
		}**/
		
		this.stop();
		this.play_button.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.play();
		}
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(121).call(this.frame_149).wait(1));

	// Layer_30
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(300.65,400.6,1.0117,0.9901);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true},25).wait(96));

	// button_layer
	this.turn_page_button = new lib.button();
	this.turn_page_button.name = "turn_page_button";
	this.turn_page_button.setTransform(465,42);
	new cjs.ButtonHelper(this.turn_page_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.turn_page_button).to({_off:true},1).wait(149));

	// Layer_31
	this.instance_1 = new lib.CachedBmp_901();
	this.instance_1.setTransform(430.4,125.4,0.5,0.5);

	this.play_button = new lib.printer_button();
	this.play_button.name = "play_button";
	this.play_button.setTransform(350,292,1,1,0,0,0,29.5,19.5);
	new cjs.ButtonHelper(this.play_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.play_button},{t:this.instance_1}]},28).to({state:[]},121).wait(1));

	// Printer
	this.instance_2 = new lib.printerright();
	this.instance_2.setTransform(180,105,0.2455,0.2455);

	this.instance_3 = new lib.Laag0();
	this.instance_3.setTransform(295,153,0.0749,0.0749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},28).wait(122));

	// Paper2
	this.instance_4 = new lib.Tween54("synched",0);
	this.instance_4.setTransform(311.9,190.75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({_off:false},0).to({x:-154.3,y:152.35},24).to({_off:true},1).wait(6));

	// Paper3
	this.instance_5 = new lib.Tween56("synched",0);
	this.instance_5.setTransform(311.65,178.95);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(127).to({_off:false},0).to({x:-72.9,y:107.5},19).to({_off:true},1).wait(3));

	// Paper4
	this.instance_6 = new lib.Tween58("synched",0);
	this.instance_6.setTransform(308.45,193.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(123).to({_off:false},0).to({x:-188.25,y:66.5},23).to({_off:true},1).wait(3));

	// Paper5
	this.instance_7 = new lib.Tween60("synched",0);
	this.instance_7.setTransform(312,193);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(116).to({_off:false},0).to({x:-123.45,y:225.25},20).to({_off:true},1).wait(13));

	// Paper6
	this.instance_8 = new lib.Tween62("synched",0);
	this.instance_8.setTransform(310.2,192.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({rotation:-79.0008,x:-72.1,y:35.5},26).to({_off:true},1).wait(4));

	// Paper7
	this.instance_9 = new lib.Tween64("synched",0);
	this.instance_9.setTransform(308.95,197.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(128).to({_off:false},0).to({x:-242,y:-13},14).to({_off:true},1).wait(7));

	// Paper8
	this.instance_10 = new lib.Tween66("synched",0);
	this.instance_10.setTransform(308.5,187.95);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(131).to({_off:false},0).to({rotation:135,x:-54.95,y:280.05},15).to({_off:true},1).wait(3));

	// Paper9
	this.instance_11 = new lib.Tween68("synched",0);
	this.instance_11.setTransform(309.7,195.05);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(121).to({_off:false},0).to({x:-126.05,y:96},23).to({_off:true},1).wait(5));

	// Printer_back
	this.instance_12 = new lib.printerleft();
	this.instance_12.setTransform(181,105,0.2455,0.2455);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(28).to({_off:false},0).wait(122));

	// smoke
	this.instance_13 = new lib.CachedBmp_523();
	this.instance_13.setTransform(308.5,-3.5,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_524();
	this.instance_14.setTransform(308.55,-3.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_525();
	this.instance_15.setTransform(308.6,-3.45,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_526();
	this.instance_16.setTransform(308.65,-3.4,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_527();
	this.instance_17.setTransform(308.7,-3.4,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_528();
	this.instance_18.setTransform(308.75,-3.35,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_529();
	this.instance_19.setTransform(308.8,-3.35,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_530();
	this.instance_20.setTransform(308.85,-3.3,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_531();
	this.instance_21.setTransform(308.9,-3.3,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_532();
	this.instance_22.setTransform(308.95,-3.25,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_533();
	this.instance_23.setTransform(309,-3.25,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_534();
	this.instance_24.setTransform(309.05,-3.2,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_535();
	this.instance_25.setTransform(309.1,-3.2,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_536();
	this.instance_26.setTransform(309.15,-3.15,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_537();
	this.instance_27.setTransform(309.2,-3.15,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_538();
	this.instance_28.setTransform(309.25,-3.1,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_539();
	this.instance_29.setTransform(309.3,-3.1,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_540();
	this.instance_30.setTransform(309.35,-3.05,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_541();
	this.instance_31.setTransform(309.4,-3.05,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_542();
	this.instance_32.setTransform(309.45,-3,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_543();
	this.instance_33.setTransform(309.5,-3,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_544();
	this.instance_34.setTransform(309.55,-2.95,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_545();
	this.instance_35.setTransform(309.6,-2.95,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_546();
	this.instance_36.setTransform(309.65,-2.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_547();
	this.instance_37.setTransform(309.7,-2.9,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_548();
	this.instance_38.setTransform(309.75,-2.85,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_549();
	this.instance_39.setTransform(309.8,-2.85,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_550();
	this.instance_40.setTransform(309.85,-2.8,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_551();
	this.instance_41.setTransform(309.9,-2.8,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_552();
	this.instance_42.setTransform(309.95,-2.75,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_553();
	this.instance_43.setTransform(310,-2.75,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_554();
	this.instance_44.setTransform(310.05,-2.7,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_555();
	this.instance_45.setTransform(310.1,-2.7,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_556();
	this.instance_46.setTransform(310.15,-2.65,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_557();
	this.instance_47.setTransform(310.2,-2.65,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_558();
	this.instance_48.setTransform(310.25,-2.6,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_559();
	this.instance_49.setTransform(310.3,-2.6,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_560();
	this.instance_50.setTransform(310.35,-2.55,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_561();
	this.instance_51.setTransform(310.4,-2.55,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_562();
	this.instance_52.setTransform(310.45,-2.5,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_563();
	this.instance_53.setTransform(310.5,-2.5,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_564();
	this.instance_54.setTransform(310.55,-2.45,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_565();
	this.instance_55.setTransform(310.6,-2.45,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_566();
	this.instance_56.setTransform(310.65,-2.4,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_567();
	this.instance_57.setTransform(310.7,-2.4,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_568();
	this.instance_58.setTransform(310.75,-2.35,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_569();
	this.instance_59.setTransform(310.8,-2.35,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_570();
	this.instance_60.setTransform(310.85,-2.3,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_571();
	this.instance_61.setTransform(310.9,-2.3,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_572();
	this.instance_62.setTransform(310.95,-2.25,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_573();
	this.instance_63.setTransform(311,-2.25,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_574();
	this.instance_64.setTransform(311.05,-2.2,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_575();
	this.instance_65.setTransform(311.1,-2.2,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_576();
	this.instance_66.setTransform(311.15,-2.15,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_577();
	this.instance_67.setTransform(311.2,-2.15,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_578();
	this.instance_68.setTransform(311.25,-2.1,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_579();
	this.instance_69.setTransform(311.3,-2.1,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_580();
	this.instance_70.setTransform(311.35,-2.05,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_581();
	this.instance_71.setTransform(311.4,-2.05,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_582();
	this.instance_72.setTransform(311.45,-2,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_583();
	this.instance_73.setTransform(311.55,-2,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_584();
	this.instance_74.setTransform(311.6,-1.95,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_585();
	this.instance_75.setTransform(311.65,-1.95,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_586();
	this.instance_76.setTransform(311.7,-1.9,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_587();
	this.instance_77.setTransform(311.75,-1.9,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_588();
	this.instance_78.setTransform(311.8,-1.85,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_589();
	this.instance_79.setTransform(311.85,-1.85,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_590();
	this.instance_80.setTransform(311.9,-1.8,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_591();
	this.instance_81.setTransform(311.95,-1.8,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_592();
	this.instance_82.setTransform(312,-1.75,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_593();
	this.instance_83.setTransform(312.05,-1.75,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_594();
	this.instance_84.setTransform(312.1,-1.7,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_595();
	this.instance_85.setTransform(312.15,-1.7,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_596();
	this.instance_86.setTransform(312.2,-1.65,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_597();
	this.instance_87.setTransform(312.25,-1.65,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_598();
	this.instance_88.setTransform(312.3,-1.6,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_599();
	this.instance_89.setTransform(312.35,-1.6,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_600();
	this.instance_90.setTransform(312.4,-1.55,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_601();
	this.instance_91.setTransform(312.45,-1.55,0.5,0.5);

	this.instance_92 = new lib.CachedBmp_602();
	this.instance_92.setTransform(312.5,-1.5,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_603();
	this.instance_93.setTransform(312.55,-1.5,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_604();
	this.instance_94.setTransform(312.6,-1.45,0.5,0.5);

	this.instance_95 = new lib.CachedBmp_605();
	this.instance_95.setTransform(312.65,-1.45,0.5,0.5);

	this.instance_96 = new lib.CachedBmp_606();
	this.instance_96.setTransform(312.7,-1.4,0.5,0.5);

	this.instance_97 = new lib.CachedBmp_607();
	this.instance_97.setTransform(312.75,-1.4,0.5,0.5);

	this.instance_98 = new lib.CachedBmp_608();
	this.instance_98.setTransform(312.8,-1.35,0.5,0.5);

	this.instance_99 = new lib.CachedBmp_609();
	this.instance_99.setTransform(312.85,-1.35,0.5,0.5);

	this.instance_100 = new lib.CachedBmp_610();
	this.instance_100.setTransform(312.9,-1.3,0.5,0.5);

	this.instance_101 = new lib.CachedBmp_611();
	this.instance_101.setTransform(312.95,-1.3,0.5,0.5);

	this.instance_102 = new lib.CachedBmp_612();
	this.instance_102.setTransform(313,-1.25,0.5,0.5);

	this.instance_103 = new lib.CachedBmp_613();
	this.instance_103.setTransform(313.05,-1.25,0.5,0.5);

	this.instance_104 = new lib.CachedBmp_614();
	this.instance_104.setTransform(313.1,-1.2,0.5,0.5);

	this.instance_105 = new lib.CachedBmp_615();
	this.instance_105.setTransform(313.15,-1.2,0.5,0.5);

	this.instance_106 = new lib.CachedBmp_616();
	this.instance_106.setTransform(313.2,-1.15,0.5,0.5);

	this.instance_107 = new lib.CachedBmp_617();
	this.instance_107.setTransform(313.25,-1.15,0.5,0.5);

	this.instance_108 = new lib.CachedBmp_618();
	this.instance_108.setTransform(313.3,-1.1,0.5,0.5);

	this.instance_109 = new lib.CachedBmp_619();
	this.instance_109.setTransform(313.35,-1.1,0.5,0.5);

	this.instance_110 = new lib.CachedBmp_620();
	this.instance_110.setTransform(313.4,-1.05,0.5,0.5);

	this.instance_111 = new lib.CachedBmp_621();
	this.instance_111.setTransform(313.45,-1.05,0.5,0.5);

	this.instance_112 = new lib.CachedBmp_622();
	this.instance_112.setTransform(313.5,-1,0.5,0.5);

	this.instance_113 = new lib.CachedBmp_623();
	this.instance_113.setTransform(313.55,-1,0.5,0.5);

	this.instance_114 = new lib.CachedBmp_624();
	this.instance_114.setTransform(313.6,-0.95,0.5,0.5);

	this.instance_115 = new lib.CachedBmp_625();
	this.instance_115.setTransform(313.65,-0.95,0.5,0.5);

	this.instance_116 = new lib.CachedBmp_626();
	this.instance_116.setTransform(313.7,-0.9,0.5,0.5);

	this.instance_117 = new lib.CachedBmp_627();
	this.instance_117.setTransform(313.75,-0.9,0.5,0.5);

	this.instance_118 = new lib.CachedBmp_628();
	this.instance_118.setTransform(313.8,-0.85,0.5,0.5);

	this.instance_119 = new lib.CachedBmp_629();
	this.instance_119.setTransform(313.85,-0.85,0.5,0.5);

	this.instance_120 = new lib.CachedBmp_630();
	this.instance_120.setTransform(313.9,-0.8,0.5,0.5);

	this.instance_121 = new lib.CachedBmp_631();
	this.instance_121.setTransform(313.95,-0.8,0.5,0.5);

	this.instance_122 = new lib.CachedBmp_632();
	this.instance_122.setTransform(314,-0.75,0.5,0.5);

	this.instance_123 = new lib.CachedBmp_633();
	this.instance_123.setTransform(314.05,-0.75,0.5,0.5);

	this.instance_124 = new lib.CachedBmp_634();
	this.instance_124.setTransform(314.1,-0.7,0.5,0.5);

	this.instance_125 = new lib.CachedBmp_635();
	this.instance_125.setTransform(314.15,-0.7,0.5,0.5);

	this.instance_126 = new lib.CachedBmp_636();
	this.instance_126.setTransform(314.2,-0.65,0.5,0.5);

	this.instance_127 = new lib.CachedBmp_637();
	this.instance_127.setTransform(314.25,-0.65,0.5,0.5);

	this.instance_128 = new lib.CachedBmp_638();
	this.instance_128.setTransform(314.3,-0.6,0.5,0.5);

	this.instance_129 = new lib.CachedBmp_639();
	this.instance_129.setTransform(314.35,-0.6,0.5,0.5);

	this.instance_130 = new lib.CachedBmp_640();
	this.instance_130.setTransform(314.4,-0.55,0.5,0.5);

	this.instance_131 = new lib.CachedBmp_641();
	this.instance_131.setTransform(314.45,-0.55,0.5,0.5);

	this.instance_132 = new lib.CachedBmp_642();
	this.instance_132.setTransform(314.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},28).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).wait(3));

	// pages
	this.instance_133 = new lib.Tween1("synched",0);
	this.instance_133.setTransform(600.6,400.05,1.0117,0.9901,0,0,0,296.6,0.1);

	this.instance_134 = new lib.CachedBmp_248();
	this.instance_134.setTransform(109,139,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_134},{t:this.instance_133,p:{regX:296.6,regY:0.1,scaleX:1.0117,scaleY:0.9901,skewY:0,x:600.6,y:400.05}}]}).to({state:[{t:this.instance_133,p:{regX:304.8,regY:-0.2,scaleX:0.9435,scaleY:1,skewY:90.1992,x:289,y:402.45}}]},14).to({state:[]},1).wait(135));

	// Page_2
	this.instance_135 = new lib.Tween1("synched",0);
	this.instance_135.setTransform(287.95,404,0.8232,1,0,0,-89.2714,-296.2,-0.1);
	this.instance_135._off = true;

	this.previous_page_button = new lib.button();
	this.previous_page_button.name = "previous_page_button";
	this.previous_page_button.setTransform(30,30);
	new cjs.ButtonHelper(this.previous_page_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_135}]},14).to({state:[{t:this.instance_135},{t:this.previous_page_button}]},14).to({state:[{t:this.instance_135}]},119).to({state:[{t:this.instance_135},{t:this.previous_page_button}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(14).to({_off:false},0).to({regX:-296,regY:0.1,scaleX:1.0117,scaleY:0.9901,skewY:0,x:0.55,y:400.05},14).wait(119).to({startPosition:0},0).to({startPosition:0},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,-169.1,596.8,977.9);
// library properties:
lib.properties = {
	id: 'CCCCEA213C7B4B468CACD0F273295817',
	width: 600,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/oldbrownvintageparchmentpapertexture.jpg?1625754408807", id:"oldbrownvintageparchmentpapertexture"},
		{src:"images/Daily_log_file_atlas_1.png?1625754408763", id:"Daily_log_file_atlas_1"},
		{src:"images/Daily_log_file_atlas_2.png?1625754408763", id:"Daily_log_file_atlas_2"},
		{src:"images/Daily_log_file_atlas_3.png?1625754408764", id:"Daily_log_file_atlas_3"},
		{src:"images/Daily_log_file_atlas_4.png?1625754408765", id:"Daily_log_file_atlas_4"},
		{src:"images/Daily_log_file_atlas_5.png?1625754408765", id:"Daily_log_file_atlas_5"},
		{src:"images/Daily_log_file_atlas_6.png?1625754408765", id:"Daily_log_file_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CCCCEA213C7B4B468CACD0F273295817'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;