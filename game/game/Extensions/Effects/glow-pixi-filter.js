var gdjs;(function(l){l.PixiFiltersTools.registerFilterCreator("Glow",new class extends l.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(t,r){return new PIXI.filters.GlowFilter}updatePreRender(t,r){}updateDoubleParameter(t,r,e){const i=t;r==="innerStrength"?i.innerStrength=e:r==="outerStrength"?i.outerStrength=e:r==="distance"&&(i.distance=e)}getDoubleParameter(t,r){const e=t;return r==="innerStrength"?e.innerStrength:r==="outerStrength"?e.outerStrength:r==="distance"?e.distance:0}updateStringParameter(t,r,e){const i=t;r==="color"&&(i.color=l.PixiFiltersTools.rgbOrHexToHexNumber(e))}updateColorParameter(t,r,e){const i=t;r==="color"&&(i.color=e)}getColorParameter(t,r){const e=t;return r==="color"?e.color:0}updateBooleanParameter(t,r,e){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=glow-pixi-filter.js.map