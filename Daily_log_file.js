(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Daily_log_file_atlas_1", frames: [[0,0,1500,1200]]},
		{name:"Daily_log_file_atlas_2", frames: [[0,0,1500,1200]]},
		{name:"Daily_log_file_atlas_3", frames: [[1523,244,220,375],[1114,244,407,225],[1114,471,220,375],[1336,621,220,375],[1558,621,220,375],[1745,0,220,375],[1780,377,220,375],[1802,754,220,375],[1802,1131,220,375],[1802,1508,220,375],[0,1604,220,375],[222,1604,220,375],[444,1604,220,375],[666,1604,220,375],[888,1604,220,375],[1110,1604,220,375],[1332,1604,220,375],[1554,1604,220,375],[0,0,1112,1022],[0,1024,1800,578],[1114,0,522,242]]},
		{name:"Daily_log_file_atlas_4", frames: [[0,0,220,375],[0,377,220,375],[0,754,220,375],[0,1131,220,375],[0,1508,220,375],[222,0,220,375],[222,377,220,375],[222,754,220,375],[222,1131,220,375],[222,1508,220,375],[444,0,220,375],[666,0,220,375],[888,0,220,375],[1110,0,220,375],[1332,0,220,375],[1554,0,220,375],[1776,0,220,375],[444,377,220,375],[444,754,220,375],[444,1131,220,375],[444,1508,220,375],[666,377,220,375],[666,754,220,375],[666,1131,220,375],[666,1508,220,375],[888,377,220,375],[1110,377,220,375],[1332,377,220,375],[1554,377,220,375],[1776,377,220,375],[888,754,220,375],[888,1131,220,375],[888,1508,220,375],[1110,754,220,375],[1332,754,220,375],[1554,754,220,375],[1776,754,220,375],[1110,1131,220,375],[1110,1508,220,375],[1332,1131,220,375],[1332,1508,220,375],[1554,1131,220,375],[1776,1131,220,375],[1554,1508,220,375],[1776,1508,220,375]]},
		{name:"Daily_log_file_atlas_5", frames: [[0,0,220,375],[0,377,220,375],[0,754,220,375],[0,1131,220,375],[0,1508,220,375],[222,0,220,375],[222,377,220,375],[222,754,220,375],[222,1131,220,375],[222,1508,220,375],[444,0,220,375],[666,0,220,375],[888,0,220,375],[1110,0,220,375],[1332,0,220,375],[1554,0,220,375],[1776,0,220,375],[444,377,220,375],[444,754,220,375],[444,1131,220,375],[444,1508,220,375],[666,377,220,375],[666,754,220,375],[666,1131,220,375],[666,1508,220,375],[888,377,220,375],[1110,377,220,375],[1332,377,220,375],[1554,377,220,375],[1776,377,220,375],[888,754,220,375],[888,1131,220,375],[888,1508,220,375],[1110,754,220,375],[1332,754,220,375],[1554,754,220,375],[1776,754,220,375],[1110,1131,220,375],[1110,1508,220,375],[1332,1131,220,375],[1332,1508,220,375],[1554,1131,220,375],[1776,1131,220,375],[1554,1508,220,375],[1776,1508,220,375]]},
		{name:"Daily_log_file_atlas_6", frames: [[1855,731,181,55],[1632,731,221,82],[0,0,220,375],[222,0,220,375],[444,0,220,375],[666,0,220,375],[888,0,220,375],[1110,0,220,375],[1332,0,220,375],[1791,377,192,352],[1582,377,207,338],[1360,377,220,323],[1554,0,220,375],[0,754,79,55],[1776,0,220,375],[888,377,230,333],[888,712,206,320],[1404,717,226,286],[1120,377,238,318],[1120,702,282,238],[0,377,220,375],[222,377,220,375],[444,377,220,375],[666,377,220,375]]}
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



(lib.CachedBmp_1226 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1268 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1222 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1228 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1224 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1221 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1220 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1218 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1223 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1215 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1219 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1217 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1216 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1214 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1211 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1212 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1213 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1209 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1207 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1210 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1208 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1205 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1206 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1204 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1202 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1203 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1201 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1200 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1199 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1198 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1193 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1196 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1192 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1194 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1191 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1190 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1189 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1195 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1197 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1188 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1187 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1186 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1185 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1184 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1183 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1182 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1179 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1181 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1180 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1177 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1176 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1178 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1174 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1173 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1175 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1172 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1170 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1171 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1168 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1169 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1167 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1165 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1163 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1166 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1161 = function() {
	this.initialize(ss["Daily_log_file_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1164 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1160 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1162 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1159 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1157 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1158 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1156 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1155 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1153 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1152 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1154 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1148 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1149 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1151 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1150 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1146 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1147 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1144 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1143 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1145 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1142 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1141 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1136 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1137 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1140 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1139 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1138 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1135 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1134 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1132 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1131 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1130 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1133 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1129 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1128 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1127 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1124 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1126 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1121 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1120 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1123 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1125 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1118 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1119 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1117 = function() {
	this.initialize(ss["Daily_log_file_atlas_5"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1122 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1116 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1115 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1114 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1113 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Laag0 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.NewsLogo = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1111 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.oldbrownvintageparchmentpapertexture = function() {
	this.initialize(img.oldbrownvintageparchmentpapertexture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2202,3000);


(lib.CachedBmp_1109 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.printerright = function() {
	this.initialize(ss["Daily_log_file_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.printerleft = function() {
	this.initialize(ss["Daily_log_file_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek14 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek12 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek15 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1110 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1104 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1112 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek16 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek17 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek13 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek19 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Rechthoek18 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1107 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1105 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1106 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1108 = function() {
	this.initialize(ss["Daily_log_file_atlas_6"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1103 = function() {
	this.initialize(ss["Daily_log_file_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


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


(lib.printer_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1268();
	this.instance.setTransform(80.05,-149.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.1,-149.9,110.5,41);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NewsLogo();
	this.instance.setTransform(0,0,0.1667,0.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,100);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.CachedBmp_1226();
	this.instance.setTransform(16,4.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1268();
	this.instance_1.setTransform(-0.45,-0.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,110.5,41);


(lib.logo_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo("synched",0);
	this.instance.setTransform(150,50,1,1,0,0,0,150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_, new cjs.Rectangle(0,0,300,100), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.logo = new lib.logo_();
	this.logo.name = "logo";
	this.logo.setTransform(-132,-347,1,1,0,0,0,150,50);

	this.instance = new lib.oldbrownvintageparchmentpapertexture();
	this.instance.setTransform(-297,-404,0.2693,0.2693);

	this.instance_1 = new lib.CachedBmp_1228();
	this.instance_1.setTransform(-180.95,-190.95,0.4942,0.4942);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.logo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-404,593.1,808);


// stage content:
(lib.Daily_log_file = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{page_1:0});

	this.actionFrames = [0,28,148,249];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		this.stop();
		
		this.turn_page_button.addEventListener("click", turnPage.bind(this));
		
		function turnPage()
		{
			this.gotoAndPlay("page_1");
			
			this.background.logo.rotation = 50;
		}
	}
	this.frame_28 = function() {
		this.previous_page_button.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			this._goto("page_1");
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
	this.frame_148 = function() {
		this.stop();
	}
	this.frame_249 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(120).call(this.frame_148).wait(101).call(this.frame_249).wait(1));

	// Layer_30
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(300.65,400.6,1.0117,0.9901);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true},25).wait(196));

	// button_layer
	this.turn_page_button = new lib.button();
	this.turn_page_button.name = "turn_page_button";
	this.turn_page_button.setTransform(465,700);
	new cjs.ButtonHelper(this.turn_page_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.turn_page_button).to({_off:true},1).wait(249));

	// pages
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(600.6,400.05,1.0117,0.9901,0,0,0,296.6,0.1);

	this.instance_2 = new lib.CachedBmp_1103();
	this.instance_2.setTransform(109,139,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{regX:296.6,regY:0.1,scaleX:1.0117,scaleY:0.9901,skewY:0,x:600.6,y:400.05}}]}).to({state:[{t:this.instance_1,p:{regX:304.8,regY:-0.2,scaleX:0.9435,scaleY:1,skewY:90.1992,x:289,y:402.45}}]},14).to({state:[]},1).wait(235));

	// Layer_31
	this.instance_3 = new lib.CachedBmp_1104();
	this.instance_3.setTransform(325.4,395.4,0.5,0.5);

	this.play_button = new lib.printer_button();
	this.play_button.name = "play_button";
	this.play_button.setTransform(239,559,1,1,0,0,0,29.5,19.5);
	new cjs.ButtonHelper(this.play_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.play_button},{t:this.instance_3}]},28).to({state:[]},121).wait(101));

	// Printer
	this.instance_4 = new lib.printerright();
	this.instance_4.setTransform(180,105,0.2455,0.2455);

	this.instance_5 = new lib.Laag0();
	this.instance_5.setTransform(295,153,0.0749,0.0749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},28).to({state:[]},122).wait(100));

	// Paper2
	this.instance_6 = new lib.Tween54("synched",0);
	this.instance_6.setTransform(311.9,190.75);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({x:-154.3,y:152.35},24).to({_off:true},1).wait(106));

	// Paper3
	this.instance_7 = new lib.Tween56("synched",0);
	this.instance_7.setTransform(311.65,178.95);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(127).to({_off:false},0).to({x:-72.9,y:107.5},19).to({_off:true},1).wait(103));

	// Paper4
	this.instance_8 = new lib.Tween58("synched",0);
	this.instance_8.setTransform(308.45,193.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(123).to({_off:false},0).to({x:-188.25,y:66.5},23).to({_off:true},1).wait(103));

	// Paper5
	this.instance_9 = new lib.Tween60("synched",0);
	this.instance_9.setTransform(312,193);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(116).to({_off:false},0).to({x:-123.45,y:225.25},20).to({_off:true},1).wait(113));

	// Paper6
	this.instance_10 = new lib.Tween62("synched",0);
	this.instance_10.setTransform(310.2,192.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({_off:false},0).to({rotation:-79.0008,x:-72.1,y:35.5},26).to({_off:true},1).wait(104));

	// Paper7
	this.instance_11 = new lib.Tween64("synched",0);
	this.instance_11.setTransform(308.95,197.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(128).to({_off:false},0).to({x:-242,y:-13},14).to({_off:true},1).wait(107));

	// Paper8
	this.instance_12 = new lib.Tween66("synched",0);
	this.instance_12.setTransform(308.5,187.95);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(131).to({_off:false},0).to({rotation:135,x:-54.95,y:280.05},15).to({_off:true},1).wait(103));

	// Paper9
	this.instance_13 = new lib.Tween68("synched",0);
	this.instance_13.setTransform(309.7,195.05);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(121).to({_off:false},0).to({x:-126.05,y:96},23).to({_off:true},1).wait(105));

	// Printer_back
	this.instance_14 = new lib.printerleft();
	this.instance_14.setTransform(181,105,0.2455,0.2455);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28).to({_off:false},0).to({_off:true},122).wait(100));

	// smoke
	this.instance_15 = new lib.CachedBmp_1105();
	this.instance_15.setTransform(308.5,-3.5,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_1106();
	this.instance_16.setTransform(308.55,-3.45,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_1107();
	this.instance_17.setTransform(308.6,-3.45,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_1108();
	this.instance_18.setTransform(308.65,-3.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_1109();
	this.instance_19.setTransform(308.7,-3.4,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_1110();
	this.instance_20.setTransform(308.75,-3.35,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_1111();
	this.instance_21.setTransform(308.8,-3.35,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_1112();
	this.instance_22.setTransform(308.85,-3.3,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_1113();
	this.instance_23.setTransform(308.9,-3.3,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_1114();
	this.instance_24.setTransform(308.95,-3.25,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_1115();
	this.instance_25.setTransform(309,-3.25,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_1116();
	this.instance_26.setTransform(309.05,-3.2,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_1117();
	this.instance_27.setTransform(309.1,-3.2,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_1118();
	this.instance_28.setTransform(309.15,-3.15,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_1119();
	this.instance_29.setTransform(309.2,-3.15,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_1120();
	this.instance_30.setTransform(309.25,-3.1,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_1121();
	this.instance_31.setTransform(309.3,-3.1,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_1122();
	this.instance_32.setTransform(309.35,-3.05,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_1123();
	this.instance_33.setTransform(309.4,-3.05,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_1124();
	this.instance_34.setTransform(309.45,-3,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_1125();
	this.instance_35.setTransform(309.5,-3,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_1126();
	this.instance_36.setTransform(309.55,-2.95,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_1127();
	this.instance_37.setTransform(309.6,-2.95,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_1128();
	this.instance_38.setTransform(309.65,-2.9,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_1129();
	this.instance_39.setTransform(309.7,-2.9,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_1130();
	this.instance_40.setTransform(309.75,-2.85,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_1131();
	this.instance_41.setTransform(309.8,-2.85,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_1132();
	this.instance_42.setTransform(309.85,-2.8,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_1133();
	this.instance_43.setTransform(309.9,-2.8,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_1134();
	this.instance_44.setTransform(309.95,-2.75,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_1135();
	this.instance_45.setTransform(310,-2.75,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_1136();
	this.instance_46.setTransform(310.05,-2.7,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_1137();
	this.instance_47.setTransform(310.1,-2.7,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_1138();
	this.instance_48.setTransform(310.15,-2.65,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_1139();
	this.instance_49.setTransform(310.2,-2.65,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_1140();
	this.instance_50.setTransform(310.25,-2.6,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_1141();
	this.instance_51.setTransform(310.3,-2.6,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_1142();
	this.instance_52.setTransform(310.35,-2.55,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_1143();
	this.instance_53.setTransform(310.4,-2.55,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_1144();
	this.instance_54.setTransform(310.45,-2.5,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_1145();
	this.instance_55.setTransform(310.5,-2.5,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_1146();
	this.instance_56.setTransform(310.55,-2.45,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_1147();
	this.instance_57.setTransform(310.6,-2.45,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_1148();
	this.instance_58.setTransform(310.65,-2.4,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_1149();
	this.instance_59.setTransform(310.7,-2.4,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_1150();
	this.instance_60.setTransform(310.75,-2.35,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_1151();
	this.instance_61.setTransform(310.8,-2.35,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_1152();
	this.instance_62.setTransform(310.85,-2.3,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_1153();
	this.instance_63.setTransform(310.9,-2.3,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_1154();
	this.instance_64.setTransform(310.95,-2.25,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_1155();
	this.instance_65.setTransform(311,-2.25,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_1156();
	this.instance_66.setTransform(311.05,-2.2,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_1157();
	this.instance_67.setTransform(311.1,-2.2,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_1158();
	this.instance_68.setTransform(311.15,-2.15,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_1159();
	this.instance_69.setTransform(311.2,-2.15,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_1160();
	this.instance_70.setTransform(311.25,-2.1,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_1161();
	this.instance_71.setTransform(311.3,-2.1,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_1162();
	this.instance_72.setTransform(311.35,-2.05,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_1163();
	this.instance_73.setTransform(311.4,-2.05,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_1164();
	this.instance_74.setTransform(311.45,-2,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_1165();
	this.instance_75.setTransform(311.55,-2,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_1166();
	this.instance_76.setTransform(311.6,-1.95,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_1167();
	this.instance_77.setTransform(311.65,-1.95,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_1168();
	this.instance_78.setTransform(311.7,-1.9,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_1169();
	this.instance_79.setTransform(311.75,-1.9,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_1170();
	this.instance_80.setTransform(311.8,-1.85,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_1171();
	this.instance_81.setTransform(311.85,-1.85,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_1172();
	this.instance_82.setTransform(311.9,-1.8,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_1173();
	this.instance_83.setTransform(311.95,-1.8,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_1174();
	this.instance_84.setTransform(312,-1.75,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_1175();
	this.instance_85.setTransform(312.05,-1.75,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_1176();
	this.instance_86.setTransform(312.1,-1.7,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_1177();
	this.instance_87.setTransform(312.15,-1.7,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_1178();
	this.instance_88.setTransform(312.2,-1.65,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_1179();
	this.instance_89.setTransform(312.25,-1.65,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_1180();
	this.instance_90.setTransform(312.3,-1.6,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_1181();
	this.instance_91.setTransform(312.35,-1.6,0.5,0.5);

	this.instance_92 = new lib.CachedBmp_1182();
	this.instance_92.setTransform(312.4,-1.55,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_1183();
	this.instance_93.setTransform(312.45,-1.55,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_1184();
	this.instance_94.setTransform(312.5,-1.5,0.5,0.5);

	this.instance_95 = new lib.CachedBmp_1185();
	this.instance_95.setTransform(312.55,-1.5,0.5,0.5);

	this.instance_96 = new lib.CachedBmp_1186();
	this.instance_96.setTransform(312.6,-1.45,0.5,0.5);

	this.instance_97 = new lib.CachedBmp_1187();
	this.instance_97.setTransform(312.65,-1.45,0.5,0.5);

	this.instance_98 = new lib.CachedBmp_1188();
	this.instance_98.setTransform(312.7,-1.4,0.5,0.5);

	this.instance_99 = new lib.CachedBmp_1189();
	this.instance_99.setTransform(312.75,-1.4,0.5,0.5);

	this.instance_100 = new lib.CachedBmp_1190();
	this.instance_100.setTransform(312.8,-1.35,0.5,0.5);

	this.instance_101 = new lib.CachedBmp_1191();
	this.instance_101.setTransform(312.85,-1.35,0.5,0.5);

	this.instance_102 = new lib.CachedBmp_1192();
	this.instance_102.setTransform(312.9,-1.3,0.5,0.5);

	this.instance_103 = new lib.CachedBmp_1193();
	this.instance_103.setTransform(312.95,-1.3,0.5,0.5);

	this.instance_104 = new lib.CachedBmp_1194();
	this.instance_104.setTransform(313,-1.25,0.5,0.5);

	this.instance_105 = new lib.CachedBmp_1195();
	this.instance_105.setTransform(313.05,-1.25,0.5,0.5);

	this.instance_106 = new lib.CachedBmp_1196();
	this.instance_106.setTransform(313.1,-1.2,0.5,0.5);

	this.instance_107 = new lib.CachedBmp_1197();
	this.instance_107.setTransform(313.15,-1.2,0.5,0.5);

	this.instance_108 = new lib.CachedBmp_1198();
	this.instance_108.setTransform(313.2,-1.15,0.5,0.5);

	this.instance_109 = new lib.CachedBmp_1199();
	this.instance_109.setTransform(313.25,-1.15,0.5,0.5);

	this.instance_110 = new lib.CachedBmp_1200();
	this.instance_110.setTransform(313.3,-1.1,0.5,0.5);

	this.instance_111 = new lib.CachedBmp_1201();
	this.instance_111.setTransform(313.35,-1.1,0.5,0.5);

	this.instance_112 = new lib.CachedBmp_1202();
	this.instance_112.setTransform(313.4,-1.05,0.5,0.5);

	this.instance_113 = new lib.CachedBmp_1203();
	this.instance_113.setTransform(313.45,-1.05,0.5,0.5);

	this.instance_114 = new lib.CachedBmp_1204();
	this.instance_114.setTransform(313.5,-1,0.5,0.5);

	this.instance_115 = new lib.CachedBmp_1205();
	this.instance_115.setTransform(313.55,-1,0.5,0.5);

	this.instance_116 = new lib.CachedBmp_1206();
	this.instance_116.setTransform(313.6,-0.95,0.5,0.5);

	this.instance_117 = new lib.CachedBmp_1207();
	this.instance_117.setTransform(313.65,-0.95,0.5,0.5);

	this.instance_118 = new lib.CachedBmp_1208();
	this.instance_118.setTransform(313.7,-0.9,0.5,0.5);

	this.instance_119 = new lib.CachedBmp_1209();
	this.instance_119.setTransform(313.75,-0.9,0.5,0.5);

	this.instance_120 = new lib.CachedBmp_1210();
	this.instance_120.setTransform(313.8,-0.85,0.5,0.5);

	this.instance_121 = new lib.CachedBmp_1211();
	this.instance_121.setTransform(313.85,-0.85,0.5,0.5);

	this.instance_122 = new lib.CachedBmp_1212();
	this.instance_122.setTransform(313.9,-0.8,0.5,0.5);

	this.instance_123 = new lib.CachedBmp_1213();
	this.instance_123.setTransform(313.95,-0.8,0.5,0.5);

	this.instance_124 = new lib.CachedBmp_1214();
	this.instance_124.setTransform(314,-0.75,0.5,0.5);

	this.instance_125 = new lib.CachedBmp_1215();
	this.instance_125.setTransform(314.05,-0.75,0.5,0.5);

	this.instance_126 = new lib.CachedBmp_1216();
	this.instance_126.setTransform(314.1,-0.7,0.5,0.5);

	this.instance_127 = new lib.CachedBmp_1217();
	this.instance_127.setTransform(314.15,-0.7,0.5,0.5);

	this.instance_128 = new lib.CachedBmp_1218();
	this.instance_128.setTransform(314.2,-0.65,0.5,0.5);

	this.instance_129 = new lib.CachedBmp_1219();
	this.instance_129.setTransform(314.25,-0.65,0.5,0.5);

	this.instance_130 = new lib.CachedBmp_1220();
	this.instance_130.setTransform(314.3,-0.6,0.5,0.5);

	this.instance_131 = new lib.CachedBmp_1221();
	this.instance_131.setTransform(314.35,-0.6,0.5,0.5);

	this.instance_132 = new lib.CachedBmp_1222();
	this.instance_132.setTransform(314.4,-0.55,0.5,0.5);

	this.instance_133 = new lib.CachedBmp_1223();
	this.instance_133.setTransform(314.45,-0.55,0.5,0.5);

	this.instance_134 = new lib.CachedBmp_1224();
	this.instance_134.setTransform(314.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},28).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[]},3).wait(100));

	// Page_2
	this.instance_135 = new lib.Tween1("synched",0);
	this.instance_135.setTransform(287.95,404,0.8232,1,0,0,-89.2714,-296.2,-0.1);
	this.instance_135._off = true;

	this.previous_page_button = new lib.button();
	this.previous_page_button.name = "previous_page_button";
	this.previous_page_button.setTransform(35,700);
	new cjs.ButtonHelper(this.previous_page_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_135}]},14).to({state:[{t:this.instance_135},{t:this.previous_page_button,p:{x:35,y:700}}]},14).to({state:[{t:this.instance_135}]},49).to({state:[{t:this.instance_135}]},70).to({state:[{t:this.instance_135},{t:this.previous_page_button,p:{x:25,y:690}}]},1).to({state:[{t:this.instance_135},{t:this.previous_page_button,p:{x:25,y:690}}]},101).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(14).to({_off:false},0).to({regX:-296,regY:0.1,scaleX:1.0117,scaleY:0.9901,skewY:0,x:0.55,y:400.05},14).wait(49).to({x:1.55},0).to({x:0.55},70).to({x:1.55},1).wait(101).to({startPosition:0},0).wait(1));

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
		{src:"images/oldbrownvintageparchmentpapertexture.jpg?1625771744536", id:"oldbrownvintageparchmentpapertexture"},
		{src:"images/Daily_log_file_atlas_1.png?1625771744490", id:"Daily_log_file_atlas_1"},
		{src:"images/Daily_log_file_atlas_2.png?1625771744490", id:"Daily_log_file_atlas_2"},
		{src:"images/Daily_log_file_atlas_3.png?1625771744491", id:"Daily_log_file_atlas_3"},
		{src:"images/Daily_log_file_atlas_4.png?1625771744492", id:"Daily_log_file_atlas_4"},
		{src:"images/Daily_log_file_atlas_5.png?1625771744493", id:"Daily_log_file_atlas_5"},
		{src:"images/Daily_log_file_atlas_6.png?1625771744493", id:"Daily_log_file_atlas_6"}
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