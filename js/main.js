(function ($) {
    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onEnter'
        }
    });
    
    // increment all "span" stats
    var stats = $('.stats .col-sm-4');
    var year = $('#year');
    var cost = $('#cost');
    var death = $('#death');
    var high = $('#high');
    var tons = $('#tons');
    var cancer = $('#cancer');
    var spans = $('span');
    var whyCare = $('#why_care');
    
    var yearCounter = { var: 0 };
    var costCounter = { var: 0 };
    var deathCounter = { var: 0 };
    var tonsCounter = { var: 0 };
    var cancerCounter = { var: 0 };
    
    // create timeLineMax for counting
    var mapSection = new TimelineMax();
    // title
    mapSection.from(whyCare, .5, {y: -50, opacity: 0});
    
    mapSection.insertMultiple([
    new TweenMax.from(stats, 1, {opacity: 0}),
        
    // year
    new TweenMax.to(yearCounter, 1, {var: 15, onUpdateParams:[year, yearCounter],onUpdate:changeSpanValue, ease:Linear.easeNone}),
    
    // cost
    new TweenMax.to(costCounter, 1, {var: 109427, onUpdateParams:[cost, costCounter],onUpdate:changeSpanValue}),
    
    // death rate
    new TweenMax.to(deathCounter, 1, {var: 6, onUpdateParams:[death, deathCounter],onUpdate:changeSpanValue}),
    
    // Emissions per capita
    new TweenMax.from(high, 1.5, {color: 'white'}),
    
    // tonnes CO2
    new TweenMax.to(tonsCounter, 1, {var: 40377, onUpdateParams:[tons, tonsCounter],onUpdate:changeSpanValue}),
    
    // cancer rate
    new TweenMax.to(cancerCounter, 1, {var: 13, onUpdateParams:[cancer, cancerCounter],onUpdate:changeSpanValue}),
]);

function changeSpanValue(spanElement, counter) {
    var value = Math.ceil(counter.var);
    spanElement.text(value);
}
 
// map animation
var singpore = $('#singapore');
var malayasia = $('#malaysia_copy');
    
var north = $('#north_copy');
var northRadius = $('#northRadius');
var east = $('#east');
var eastRadius = $('#eastRadius');
var south = $('#south');
var southRadius = $('#southRadius');
    
var allPoll = $('#pollution > g');
 
var pollutionAnim = new TimelineMax();
pollutionAnim.from(singpore, .5, {opacity: 0});
pollutionAnim.from(malayasia, .5, {opacity: 0});    
    
// elastic in
pollutionAnim.staggerFrom(allPoll, .5, {opacity: 0, ease:Elastic.easeOut}, 0.25);
pollutionAnim.staggerFrom([northRadius, eastRadius, southRadius], .5, {attr:{r: 0}, ease:Elastic.easeOut}, 0.25);
    
// pinging circles
//    pollutionAnim.staggerTo([northRadius, eastRadius, southRadius], 1, {attr:{r: '+=5'},  repeat: -1}, 0.001);
    
// showing color/position potential
pollutionAnim.staggerTo([northRadius, eastRadius, southRadius], 3, {attr:{r: '+=15'}, opacity: .8, x: 30, y: 30, fill: 'red', repeat: -1}, 0.001);
    
// create scene countAllStats
new ScrollMagic.Scene({
        duration: '100%',
        offset: 200
    })
    .setTween(mapSection)
    .triggerElement($('#map')[0])
    .addTo(ctrl);

new ScrollMagic.Scene({
        triggerElement: '#mapSVG',
        offset: 200
    })
    .setTween(pollutionAnim)
    .addTo(ctrl);
    
})(jQuery);