var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_EMS01Jan202430June2024_1 = new ol.format.GeoJSON();
var features_EMS01Jan202430June2024_1 = format_EMS01Jan202430June2024_1.readFeatures(json_EMS01Jan202430June2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMS01Jan202430June2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMS01Jan202430June2024_1.addFeatures(features_EMS01Jan202430June2024_1);
var lyr_EMS01Jan202430June2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMS01Jan202430June2024_1, 
                style: style_EMS01Jan202430June2024_1,
                popuplayertitle: "EMS 01 Jan 2024 - 30 June 2024",
                interactive: true,
                title: '<img src="styles/legend/EMS01Jan202430June2024_1.png" /> EMS 01 Jan 2024 - 30 June 2024'
            });
var format_ODdrugintoxcalls_2 = new ol.format.GeoJSON();
var features_ODdrugintoxcalls_2 = format_ODdrugintoxcalls_2.readFeatures(json_ODdrugintoxcalls_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODdrugintoxcalls_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODdrugintoxcalls_2.addFeatures(features_ODdrugintoxcalls_2);
var lyr_ODdrugintoxcalls_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODdrugintoxcalls_2, 
                style: style_ODdrugintoxcalls_2,
                popuplayertitle: "OD, drug, intox calls",
                interactive: true,
                title: '<img src="styles/legend/ODdrugintoxcalls_2.png" /> OD, drug, intox calls'
            });

lyr_Positronretina_0.setVisible(true);lyr_EMS01Jan202430June2024_1.setVisible(true);lyr_ODdrugintoxcalls_2.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_EMS01Jan202430June2024_1,lyr_ODdrugintoxcalls_2];
lyr_EMS01Jan202430June2024_1.set('fieldAliases', {'Address': 'Address', 'Town': 'Town', 'State': 'State', 'ZIP': 'ZIP', 'Description': 'Description', 'Date and time': 'Date and time', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Companies': 'Companies', });
lyr_ODdrugintoxcalls_2.set('fieldAliases', {'Address': 'Address', 'Town': 'Town', 'State': 'State', 'ZIP': 'ZIP', 'Description': 'Description', 'Date and time': 'Date and time', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Companies': 'Companies', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_EMS01Jan202430June2024_1.set('fieldImages', {'Address': 'TextEdit', 'Town': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'Description': 'TextEdit', 'Date and time': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Companies': 'TextEdit', });
lyr_ODdrugintoxcalls_2.set('fieldImages', {'Address': 'TextEdit', 'Town': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'Description': 'TextEdit', 'Date and time': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Companies': 'TextEdit', 'field_10': '', 'field_11': '', 'field_12': '', 'field_13': '', 'field_14': '', });
lyr_EMS01Jan202430June2024_1.set('fieldLabels', {'Address': 'header label - visible with data', 'Town': 'header label - visible with data', 'State': 'hidden field', 'ZIP': 'hidden field', 'Description': 'header label - visible with data', 'Date and time': 'header label - visible with data', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Companies': 'hidden field', });
lyr_ODdrugintoxcalls_2.set('fieldLabels', {'Address': 'header label - visible with data', 'Town': 'header label - visible with data', 'State': 'hidden field', 'ZIP': 'hidden field', 'Description': 'header label - visible with data', 'Date and time': 'header label - visible with data', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Companies': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', 'field_12': 'hidden field', 'field_13': 'hidden field', 'field_14': 'hidden field', });
lyr_ODdrugintoxcalls_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});