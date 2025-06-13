var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_E_MonteUnidades_de_vegetacin_1 = new ol.format.GeoJSON();
var features_E_MonteUnidades_de_vegetacin_1 = format_E_MonteUnidades_de_vegetacin_1.readFeatures(json_E_MonteUnidades_de_vegetacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteUnidades_de_vegetacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteUnidades_de_vegetacin_1.addFeatures(features_E_MonteUnidades_de_vegetacin_1);
var lyr_E_MonteUnidades_de_vegetacin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteUnidades_de_vegetacin_1, 
                style: style_E_MonteUnidades_de_vegetacin_1,
                popuplayertitle: 'E_Monte — Unidades_de_vegetación',
                interactive: false,
                title: '<img src="styles/legend/E_MonteUnidades_de_vegetacin_1.png" /> E_Monte — Unidades_de_vegetación'
            });
var format_E_MonteSuelos_2 = new ol.format.GeoJSON();
var features_E_MonteSuelos_2 = format_E_MonteSuelos_2.readFeatures(json_E_MonteSuelos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteSuelos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteSuelos_2.addFeatures(features_E_MonteSuelos_2);
var lyr_E_MonteSuelos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteSuelos_2, 
                style: style_E_MonteSuelos_2,
                popuplayertitle: 'E_Monte — Suelos',
                interactive: false,
                title: '<img src="styles/legend/E_MonteSuelos_2.png" /> E_Monte — Suelos'
            });
var format_E_MonteSitios_RAMSAR_3 = new ol.format.GeoJSON();
var features_E_MonteSitios_RAMSAR_3 = format_E_MonteSitios_RAMSAR_3.readFeatures(json_E_MonteSitios_RAMSAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteSitios_RAMSAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteSitios_RAMSAR_3.addFeatures(features_E_MonteSitios_RAMSAR_3);
var lyr_E_MonteSitios_RAMSAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteSitios_RAMSAR_3, 
                style: style_E_MonteSitios_RAMSAR_3,
                popuplayertitle: 'E_Monte — Sitios_RAMSAR',
                interactive: false,
                title: '<img src="styles/legend/E_MonteSitios_RAMSAR_3.png" /> E_Monte — Sitios_RAMSAR'
            });
var format_E_MonteParques_Nacionales_4 = new ol.format.GeoJSON();
var features_E_MonteParques_Nacionales_4 = format_E_MonteParques_Nacionales_4.readFeatures(json_E_MonteParques_Nacionales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteParques_Nacionales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteParques_Nacionales_4.addFeatures(features_E_MonteParques_Nacionales_4);
var lyr_E_MonteParques_Nacionales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteParques_Nacionales_4, 
                style: style_E_MonteParques_Nacionales_4,
                popuplayertitle: 'E_Monte — Parques_Nacionales',
                interactive: false,
                title: '<img src="styles/legend/E_MonteParques_Nacionales_4.png" /> E_Monte — Parques_Nacionales'
            });
var format_E_MonteOTBN_5 = new ol.format.GeoJSON();
var features_E_MonteOTBN_5 = format_E_MonteOTBN_5.readFeatures(json_E_MonteOTBN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteOTBN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteOTBN_5.addFeatures(features_E_MonteOTBN_5);
var lyr_E_MonteOTBN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteOTBN_5, 
                style: style_E_MonteOTBN_5,
                popuplayertitle: 'E_Monte — OTBN',
                interactive: false,
                title: '<img src="styles/legend/E_MonteOTBN_5.png" /> E_Monte — OTBN'
            });
var format_E_MonteIncendios_6 = new ol.format.GeoJSON();
var features_E_MonteIncendios_6 = format_E_MonteIncendios_6.readFeatures(json_E_MonteIncendios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteIncendios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteIncendios_6.addFeatures(features_E_MonteIncendios_6);
var lyr_E_MonteIncendios_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteIncendios_6, 
                style: style_E_MonteIncendios_6,
                popuplayertitle: 'E_Monte — Incendios',
                interactive: false,
                title: '<img src="styles/legend/E_MonteIncendios_6.png" /> E_Monte — Incendios'
            });
var format_E_MonteHumedales_7 = new ol.format.GeoJSON();
var features_E_MonteHumedales_7 = format_E_MonteHumedales_7.readFeatures(json_E_MonteHumedales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteHumedales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteHumedales_7.addFeatures(features_E_MonteHumedales_7);
var lyr_E_MonteHumedales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteHumedales_7, 
                style: style_E_MonteHumedales_7,
                popuplayertitle: 'E_Monte — Humedales',
                interactive: false,
                title: '<img src="styles/legend/E_MonteHumedales_7.png" /> E_Monte — Humedales'
            });
var format_E_Montejidos_urbanos_8 = new ol.format.GeoJSON();
var features_E_Montejidos_urbanos_8 = format_E_Montejidos_urbanos_8.readFeatures(json_E_Montejidos_urbanos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Montejidos_urbanos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Montejidos_urbanos_8.addFeatures(features_E_Montejidos_urbanos_8);
var lyr_E_Montejidos_urbanos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_Montejidos_urbanos_8, 
                style: style_E_Montejidos_urbanos_8,
                popuplayertitle: 'E_Monte — Éjidos_urbanos',
                interactive: false,
                title: '<img src="styles/legend/E_Montejidos_urbanos_8.png" /> E_Monte — Éjidos_urbanos'
            });
var format_E_MonteEcorregin_9 = new ol.format.GeoJSON();
var features_E_MonteEcorregin_9 = format_E_MonteEcorregin_9.readFeatures(json_E_MonteEcorregin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteEcorregin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteEcorregin_9.addFeatures(features_E_MonteEcorregin_9);
var lyr_E_MonteEcorregin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteEcorregin_9, 
                style: style_E_MonteEcorregin_9,
                popuplayertitle: 'E_Monte — Ecorregión',
                interactive: false,
                title: '<img src="styles/legend/E_MonteEcorregin_9.png" /> E_Monte — Ecorregión'
            });
var format_E_MonteCuencas_hidrogrficas_10 = new ol.format.GeoJSON();
var features_E_MonteCuencas_hidrogrficas_10 = format_E_MonteCuencas_hidrogrficas_10.readFeatures(json_E_MonteCuencas_hidrogrficas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteCuencas_hidrogrficas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteCuencas_hidrogrficas_10.addFeatures(features_E_MonteCuencas_hidrogrficas_10);
var lyr_E_MonteCuencas_hidrogrficas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteCuencas_hidrogrficas_10, 
                style: style_E_MonteCuencas_hidrogrficas_10,
                popuplayertitle: 'E_Monte — Cuencas_hidrográficas',
                interactive: false,
                title: '<img src="styles/legend/E_MonteCuencas_hidrogrficas_10.png" /> E_Monte — Cuencas_hidrográficas'
            });
var format_E_Montereas_Naturales_Protegidas_11 = new ol.format.GeoJSON();
var features_E_Montereas_Naturales_Protegidas_11 = format_E_Montereas_Naturales_Protegidas_11.readFeatures(json_E_Montereas_Naturales_Protegidas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Montereas_Naturales_Protegidas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Montereas_Naturales_Protegidas_11.addFeatures(features_E_Montereas_Naturales_Protegidas_11);
var lyr_E_Montereas_Naturales_Protegidas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_Montereas_Naturales_Protegidas_11, 
                style: style_E_Montereas_Naturales_Protegidas_11,
                popuplayertitle: 'E_Monte — Áreas_Naturales_Protegidas',
                interactive: false,
                title: '<img src="styles/legend/E_Montereas_Naturales_Protegidas_11.png" /> E_Monte — Áreas_Naturales_Protegidas'
            });
var format_E_Montereas_protegidas_provinciales_12 = new ol.format.GeoJSON();
var features_E_Montereas_protegidas_provinciales_12 = format_E_Montereas_protegidas_provinciales_12.readFeatures(json_E_Montereas_protegidas_provinciales_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Montereas_protegidas_provinciales_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Montereas_protegidas_provinciales_12.addFeatures(features_E_Montereas_protegidas_provinciales_12);
var lyr_E_Montereas_protegidas_provinciales_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_Montereas_protegidas_provinciales_12, 
                style: style_E_Montereas_protegidas_provinciales_12,
                popuplayertitle: 'E_Monte — Áreas_protegidas_provinciales',
                interactive: false,
                title: '<img src="styles/legend/E_Montereas_protegidas_provinciales_12.png" /> E_Monte — Áreas_protegidas_provinciales'
            });
var format_E_MonteRed_vial_rural_13 = new ol.format.GeoJSON();
var features_E_MonteRed_vial_rural_13 = format_E_MonteRed_vial_rural_13.readFeatures(json_E_MonteRed_vial_rural_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteRed_vial_rural_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteRed_vial_rural_13.addFeatures(features_E_MonteRed_vial_rural_13);
var lyr_E_MonteRed_vial_rural_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteRed_vial_rural_13, 
                style: style_E_MonteRed_vial_rural_13,
                popuplayertitle: 'E_Monte — Red_vial_rural',
                interactive: false,
                title: '<img src="styles/legend/E_MonteRed_vial_rural_13.png" /> E_Monte — Red_vial_rural'
            });
var format_E_MonteRed_vial_provincial_14 = new ol.format.GeoJSON();
var features_E_MonteRed_vial_provincial_14 = format_E_MonteRed_vial_provincial_14.readFeatures(json_E_MonteRed_vial_provincial_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteRed_vial_provincial_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteRed_vial_provincial_14.addFeatures(features_E_MonteRed_vial_provincial_14);
var lyr_E_MonteRed_vial_provincial_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteRed_vial_provincial_14, 
                style: style_E_MonteRed_vial_provincial_14,
                popuplayertitle: 'E_Monte — Red_vial_provincial',
                interactive: false,
                title: '<img src="styles/legend/E_MonteRed_vial_provincial_14.png" /> E_Monte — Red_vial_provincial'
            });
var format_E_MonteRed_vial_nacional_15 = new ol.format.GeoJSON();
var features_E_MonteRed_vial_nacional_15 = format_E_MonteRed_vial_nacional_15.readFeatures(json_E_MonteRed_vial_nacional_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteRed_vial_nacional_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteRed_vial_nacional_15.addFeatures(features_E_MonteRed_vial_nacional_15);
var lyr_E_MonteRed_vial_nacional_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteRed_vial_nacional_15, 
                style: style_E_MonteRed_vial_nacional_15,
                popuplayertitle: 'E_Monte — Red_vial_nacional',
                interactive: false,
                title: '<img src="styles/legend/E_MonteRed_vial_nacional_15.png" /> E_Monte — Red_vial_nacional'
            });
var format_E_MonteRed_vial_terciaria_16 = new ol.format.GeoJSON();
var features_E_MonteRed_vial_terciaria_16 = format_E_MonteRed_vial_terciaria_16.readFeatures(json_E_MonteRed_vial_terciaria_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteRed_vial_terciaria_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteRed_vial_terciaria_16.addFeatures(features_E_MonteRed_vial_terciaria_16);
var lyr_E_MonteRed_vial_terciaria_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteRed_vial_terciaria_16, 
                style: style_E_MonteRed_vial_terciaria_16,
                popuplayertitle: 'E_Monte — Red_vial_terciaria',
                interactive: false,
                title: '<img src="styles/legend/E_MonteRed_vial_terciaria_16.png" /> E_Monte — Red_vial_terciaria'
            });
var format_E_MonteCortinas_forestales_17 = new ol.format.GeoJSON();
var features_E_MonteCortinas_forestales_17 = format_E_MonteCortinas_forestales_17.readFeatures(json_E_MonteCortinas_forestales_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_MonteCortinas_forestales_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_MonteCortinas_forestales_17.addFeatures(features_E_MonteCortinas_forestales_17);
var lyr_E_MonteCortinas_forestales_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_MonteCortinas_forestales_17, 
                style: style_E_MonteCortinas_forestales_17,
                popuplayertitle: 'E_Monte — Cortinas_forestales',
                interactive: false,
                title: '<img src="styles/legend/E_MonteCortinas_forestales_17.png" /> E_Monte — Cortinas_forestales'
            });
var format_E_Montereas_protegidas_privadas_18 = new ol.format.GeoJSON();
var features_E_Montereas_protegidas_privadas_18 = format_E_Montereas_protegidas_privadas_18.readFeatures(json_E_Montereas_protegidas_privadas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_Montereas_protegidas_privadas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_Montereas_protegidas_privadas_18.addFeatures(features_E_Montereas_protegidas_privadas_18);
var lyr_E_Montereas_protegidas_privadas_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_Montereas_protegidas_privadas_18, 
                style: style_E_Montereas_protegidas_privadas_18,
                popuplayertitle: 'E_Monte — Áreas_protegidas_privadas',
                interactive: false,
                title: '<img src="styles/legend/E_Montereas_protegidas_privadas_18.png" /> E_Monte — Áreas_protegidas_privadas'
            });

lyr_Argenmap_0.setVisible(true);lyr_E_MonteUnidades_de_vegetacin_1.setVisible(true);lyr_E_MonteSuelos_2.setVisible(true);lyr_E_MonteSitios_RAMSAR_3.setVisible(true);lyr_E_MonteParques_Nacionales_4.setVisible(true);lyr_E_MonteOTBN_5.setVisible(true);lyr_E_MonteIncendios_6.setVisible(true);lyr_E_MonteHumedales_7.setVisible(true);lyr_E_Montejidos_urbanos_8.setVisible(true);lyr_E_MonteEcorregin_9.setVisible(true);lyr_E_MonteCuencas_hidrogrficas_10.setVisible(true);lyr_E_Montereas_Naturales_Protegidas_11.setVisible(true);lyr_E_Montereas_protegidas_provinciales_12.setVisible(true);lyr_E_MonteRed_vial_rural_13.setVisible(true);lyr_E_MonteRed_vial_provincial_14.setVisible(true);lyr_E_MonteRed_vial_nacional_15.setVisible(true);lyr_E_MonteRed_vial_terciaria_16.setVisible(true);lyr_E_MonteCortinas_forestales_17.setVisible(true);lyr_E_Montereas_protegidas_privadas_18.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_E_MonteUnidades_de_vegetacin_1,lyr_E_MonteSuelos_2,lyr_E_MonteSitios_RAMSAR_3,lyr_E_MonteParques_Nacionales_4,lyr_E_MonteOTBN_5,lyr_E_MonteIncendios_6,lyr_E_MonteHumedales_7,lyr_E_Montejidos_urbanos_8,lyr_E_MonteEcorregin_9,lyr_E_MonteCuencas_hidrogrficas_10,lyr_E_Montereas_Naturales_Protegidas_11,lyr_E_Montereas_protegidas_provinciales_12,lyr_E_MonteRed_vial_rural_13,lyr_E_MonteRed_vial_provincial_14,lyr_E_MonteRed_vial_nacional_15,lyr_E_MonteRed_vial_terciaria_16,lyr_E_MonteCortinas_forestales_17,lyr_E_Montereas_protegidas_privadas_18];
lyr_E_MonteUnidades_de_vegetacin_1.set('fieldAliases', {'CODIGO': 'CODIGO', 'REGION': 'REGION', 'DOMINIO': 'DOMINIO', 'UNID_FITOG': 'UNID_FITOG', 'NOMFISONOM': 'NOMFISONOM', 'NOMVULGAR': 'NOMVULGAR', 'SUP_HA': 'SUP_HA', 'X': 'X', 'Y': 'Y', 'ROTATION': 'ROTATION', });
lyr_E_MonteSuelos_2.set('fieldAliases', {'provincia': 'provincia', 'new_ncart': 'new_ncart', 'simbc': 'simbc', 'tipo_uc': 'tipo_uc', 'limit_ppal': 'limit_ppal', 'limit_secu': 'limit_secu', 'limit_terc': 'limit_terc', 'ind_prod': 'ind_prod', 'porc_sue1': 'porc_sue1', 'posi_sue1': 'posi_sue1', 'orden_sue1': 'orden_sue1', 'ggrup_sue1': 'ggrup_sue1', 'sgrup_sue1': 'sgrup_sue1', 'text_sups1': 'text_sups1', 'text_bs1': 'text_bs1', 'drenaje_s1': 'drenaje_s1', 'profund_s1': 'profund_s1', 'alcalin_s1': 'alcalin_s1', 'porc_pens1': 'porc_pens1', 'erhidr_s1': 'erhidr_s1', 'ereoli_s1': 'ereoli_s1', 'rocos_s1': 'rocos_s1', 'anegab_s1': 'anegab_s1', 'porc_sue2': 'porc_sue2', 'posi_sue2': 'posi_sue2', 'orden_sue2': 'orden_sue2', 'ggrup_sue2': 'ggrup_sue2', 'sgrup_sue2': 'sgrup_sue2', 'porc_sue3': 'porc_sue3', 'posi_sue3': 'posi_sue3', 'orden_sue3': 'orden_sue3', 'ggrup_sue3': 'ggrup_sue3', 'sgrup_sue3': 'sgrup_sue3', 'ogc_fid': 'ogc_fid', });
lyr_E_MonteSitios_RAMSAR_3.set('fieldAliases', {'gna': 'gna', 'nam': 'nam', 'creacion': 'creacion', 'provincia': 'provincia', 'area_ha': 'area_ha', });
lyr_E_MonteParques_Nacionales_4.set('fieldAliases', {'cat_gral': 'cat_gral', 'nombre': 'nombre', 'sup_total': 'sup_total', 'sup_terr': 'sup_terr', 'sup_mar': 'sup_mar', 'ano': 'ano', 'latitud': 'latitud', 'longitud': 'longitud', 'ecorregion': 'ecorregion', 'uicn_cat': 'uicn_cat', 'cat_int': 'cat_int', 'provincia': 'provincia', });
lyr_E_MonteOTBN_5.set('fieldAliases', {'fna': 'fna', 'nam': 'nam', 'cam': 'cam', 'dct': 'dct', 'sag': 'sag', });
lyr_E_MonteIncendios_6.set('fieldAliases', {'fid': 'fid', 'prov': 'prov', 'nomprov': 'nomprov', '2020': '2020', '2021': '2021', '2022': '2022', '2023': '2023', '2017': '2017', '2018': '2018', '2019': '2019', });
lyr_E_MonteHumedales_7.set('fieldAliases', {'region_num': 'region_num', 'region_nom': 'region_nom', 'region_sub': 'region_sub', });
lyr_E_Montejidos_urbanos_8.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAm': 'NAm', 'SAG': 'SAG', });
lyr_E_MonteEcorregin_9.set('fieldAliases', {'ecorregion': 'ecorregion', 'hectareas': 'hectareas', 'layer': 'layer', 'path': 'path', });
lyr_E_MonteCuencas_hidrogrficas_10.set('fieldAliases', {'area': 'area', 'perimeter': 'perimeter', 'cuencas_': 'cuencas_', 'cuencas_id': 'cuencas_id', 'cuen_cod': 'cuen_cod', 'nombre': 'nombre', 'provincia': 'provincia', 'numero': 'numero', 'sistema': 'sistema', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'sistemas': 'sistemas', 'sistemas_l': 'sistemas_l', 'cuencas_la': 'cuencas_la', });
lyr_E_Montereas_Naturales_Protegidas_11.set('fieldAliases', {'cat_gral': 'cat_gral', 'nombre': 'nombre', 'sup_total': 'sup_total', 'sup_terr': 'sup_terr', 'sup_mar': 'sup_mar', 'ano': 'ano', 'latitud': 'latitud', 'longitud': 'longitud', 'ecorregion': 'ecorregion', 'uicn_cat': 'uicn_cat', 'cat_int': 'cat_int', 'provincia': 'provincia', });
lyr_E_Montereas_protegidas_provinciales_12.set('fieldAliases', {'id': 'id', 'gna': 'gna', 'nam': 'nam', 'desig_type': 'desig_type', 'iucn_cat': 'iucn_cat', 'a?o': 'a?o', });
lyr_E_MonteRed_vial_rural_13.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'caa': 'caa', 'fdc': 'fdc', 'sag': 'sag', });
lyr_E_MonteRed_vial_provincial_14.set('fieldAliases', {'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_E_MonteRed_vial_nacional_15.set('fieldAliases', {'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_E_MonteRed_vial_terciaria_16.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna1': 'fna1', 'gna1': 'gna1', 'nam1': 'nam1', 'fna2': 'fna2', 'gna2': 'gna2', 'nam2': 'nam2', 'fun': 'fun', 'rst': 'rst', 'typ': 'typ', 'mes': 'mes', 'hct': 'hct', 'loc': 'loc', 'fdc': 'fdc', 'nr': 'nr', 'sag': 'sag', });
lyr_E_MonteCortinas_forestales_17.set('fieldAliases', {'genero': 'genero', 'longitud': 'longitud', });
lyr_E_Montereas_protegidas_privadas_18.set('fieldAliases', {'nombre_are': 'nombre_are', 'categoria_': 'categoria_', 'area_en_ha': 'area_en_ha', 'ecoregion': 'ecoregion', 'adminstrac': 'adminstrac', 'provincia': 'provincia', 'a?o_crea': 'a?o_crea', 'tipo_instr': 'tipo_instr', 'numero_ins': 'numero_ins', });
lyr_E_MonteUnidades_de_vegetacin_1.set('fieldImages', {'CODIGO': '', 'REGION': '', 'DOMINIO': '', 'UNID_FITOG': '', 'NOMFISONOM': '', 'NOMVULGAR': '', 'SUP_HA': '', 'X': '', 'Y': '', 'ROTATION': '', });
lyr_E_MonteSuelos_2.set('fieldImages', {'provincia': '', 'new_ncart': '', 'simbc': '', 'tipo_uc': '', 'limit_ppal': '', 'limit_secu': '', 'limit_terc': '', 'ind_prod': '', 'porc_sue1': '', 'posi_sue1': '', 'orden_sue1': '', 'ggrup_sue1': '', 'sgrup_sue1': '', 'text_sups1': '', 'text_bs1': '', 'drenaje_s1': '', 'profund_s1': '', 'alcalin_s1': '', 'porc_pens1': '', 'erhidr_s1': '', 'ereoli_s1': '', 'rocos_s1': '', 'anegab_s1': '', 'porc_sue2': '', 'posi_sue2': '', 'orden_sue2': '', 'ggrup_sue2': '', 'sgrup_sue2': '', 'porc_sue3': '', 'posi_sue3': '', 'orden_sue3': '', 'ggrup_sue3': '', 'sgrup_sue3': '', 'ogc_fid': '', });
lyr_E_MonteSitios_RAMSAR_3.set('fieldImages', {'gna': '', 'nam': '', 'creacion': '', 'provincia': '', 'area_ha': '', });
lyr_E_MonteParques_Nacionales_4.set('fieldImages', {'cat_gral': '', 'nombre': '', 'sup_total': '', 'sup_terr': '', 'sup_mar': '', 'ano': '', 'latitud': '', 'longitud': '', 'ecorregion': '', 'uicn_cat': '', 'cat_int': '', 'provincia': '', });
lyr_E_MonteOTBN_5.set('fieldImages', {'fna': '', 'nam': '', 'cam': '', 'dct': '', 'sag': '', });
lyr_E_MonteIncendios_6.set('fieldImages', {'fid': '', 'prov': '', 'nomprov': '', '2020': '', '2021': '', '2022': '', '2023': '', '2017': '', '2018': '', '2019': '', });
lyr_E_MonteHumedales_7.set('fieldImages', {'region_num': '', 'region_nom': '', 'region_sub': '', });
lyr_E_Montejidos_urbanos_8.set('fieldImages', {'Objeto': '', 'FNA': '', 'GNA': '', 'NAm': '', 'SAG': '', });
lyr_E_MonteEcorregin_9.set('fieldImages', {'ecorregion': '', 'hectareas': '', 'layer': '', 'path': '', });
lyr_E_MonteCuencas_hidrogrficas_10.set('fieldImages', {'area': '', 'perimeter': '', 'cuencas_': '', 'cuencas_id': '', 'cuen_cod': '', 'nombre': '', 'provincia': '', 'numero': '', 'sistema': '', 'shape_leng': '', 'shape_area': '', 'sistemas': '', 'sistemas_l': '', 'cuencas_la': '', });
lyr_E_Montereas_Naturales_Protegidas_11.set('fieldImages', {'cat_gral': '', 'nombre': '', 'sup_total': '', 'sup_terr': '', 'sup_mar': '', 'ano': '', 'latitud': '', 'longitud': '', 'ecorregion': '', 'uicn_cat': '', 'cat_int': '', 'provincia': '', });
lyr_E_Montereas_protegidas_provinciales_12.set('fieldImages', {'id': '', 'gna': '', 'nam': '', 'desig_type': '', 'iucn_cat': '', 'a?o': '', });
lyr_E_MonteRed_vial_rural_13.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'caa': '', 'fdc': '', 'sag': '', });
lyr_E_MonteRed_vial_provincial_14.set('fieldImages', {'gid': '', 'rtn': '', 'typ': '', 'rst': '', 'hct': '', 'fdc': '', 'sag': '', });
lyr_E_MonteRed_vial_nacional_15.set('fieldImages', {'gid': '', 'rtn': '', 'typ': '', 'rst': '', 'hct': '', 'fdc': '', 'sag': '', });
lyr_E_MonteRed_vial_terciaria_16.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna1': '', 'gna1': '', 'nam1': '', 'fna2': '', 'gna2': '', 'nam2': '', 'fun': '', 'rst': '', 'typ': '', 'mes': '', 'hct': '', 'loc': '', 'fdc': '', 'nr': '', 'sag': '', });
lyr_E_MonteCortinas_forestales_17.set('fieldImages', {'genero': '', 'longitud': '', });
lyr_E_Montereas_protegidas_privadas_18.set('fieldImages', {'nombre_are': '', 'categoria_': '', 'area_en_ha': '', 'ecoregion': '', 'adminstrac': '', 'provincia': '', 'a?o_crea': '', 'tipo_instr': '', 'numero_ins': '', });
lyr_E_MonteUnidades_de_vegetacin_1.set('fieldLabels', {'CODIGO': 'no label', 'REGION': 'no label', 'DOMINIO': 'no label', 'UNID_FITOG': 'no label', 'NOMFISONOM': 'no label', 'NOMVULGAR': 'no label', 'SUP_HA': 'no label', 'X': 'no label', 'Y': 'no label', 'ROTATION': 'no label', });
lyr_E_MonteSuelos_2.set('fieldLabels', {'provincia': 'no label', 'new_ncart': 'no label', 'simbc': 'no label', 'tipo_uc': 'no label', 'limit_ppal': 'no label', 'limit_secu': 'no label', 'limit_terc': 'no label', 'ind_prod': 'no label', 'porc_sue1': 'no label', 'posi_sue1': 'no label', 'orden_sue1': 'no label', 'ggrup_sue1': 'no label', 'sgrup_sue1': 'no label', 'text_sups1': 'no label', 'text_bs1': 'no label', 'drenaje_s1': 'no label', 'profund_s1': 'no label', 'alcalin_s1': 'no label', 'porc_pens1': 'no label', 'erhidr_s1': 'no label', 'ereoli_s1': 'no label', 'rocos_s1': 'no label', 'anegab_s1': 'no label', 'porc_sue2': 'no label', 'posi_sue2': 'no label', 'orden_sue2': 'no label', 'ggrup_sue2': 'no label', 'sgrup_sue2': 'no label', 'porc_sue3': 'no label', 'posi_sue3': 'no label', 'orden_sue3': 'no label', 'ggrup_sue3': 'no label', 'sgrup_sue3': 'no label', 'ogc_fid': 'no label', });
lyr_E_MonteSitios_RAMSAR_3.set('fieldLabels', {'gna': 'inline label - always visible', 'nam': 'no label', 'creacion': 'no label', 'provincia': 'no label', 'area_ha': 'no label', });
lyr_E_MonteParques_Nacionales_4.set('fieldLabels', {'cat_gral': 'no label', 'nombre': 'no label', 'sup_total': 'no label', 'sup_terr': 'no label', 'sup_mar': 'no label', 'ano': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'ecorregion': 'no label', 'uicn_cat': 'no label', 'cat_int': 'no label', 'provincia': 'no label', });
lyr_E_MonteOTBN_5.set('fieldLabels', {'fna': 'no label', 'nam': 'inline label - always visible', 'cam': 'no label', 'dct': 'no label', 'sag': 'no label', });
lyr_E_MonteIncendios_6.set('fieldLabels', {'fid': 'no label', 'prov': 'no label', 'nomprov': 'no label', '2020': 'no label', '2021': 'no label', '2022': 'no label', '2023': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', });
lyr_E_MonteHumedales_7.set('fieldLabels', {'region_num': 'inline label - always visible', 'region_nom': 'no label', 'region_sub': 'no label', });
lyr_E_Montejidos_urbanos_8.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAm': 'no label', 'SAG': 'no label', });
lyr_E_MonteEcorregin_9.set('fieldLabels', {'ecorregion': 'inline label - always visible', 'hectareas': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_E_MonteCuencas_hidrogrficas_10.set('fieldLabels', {'area': 'no label', 'perimeter': 'no label', 'cuencas_': 'no label', 'cuencas_id': 'no label', 'cuen_cod': 'no label', 'nombre': 'no label', 'provincia': 'no label', 'numero': 'no label', 'sistema': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'sistemas': 'no label', 'sistemas_l': 'no label', 'cuencas_la': 'no label', });
lyr_E_Montereas_Naturales_Protegidas_11.set('fieldLabels', {'cat_gral': 'no label', 'nombre': 'inline label - always visible', 'sup_total': 'no label', 'sup_terr': 'no label', 'sup_mar': 'no label', 'ano': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'ecorregion': 'no label', 'uicn_cat': 'no label', 'cat_int': 'no label', 'provincia': 'no label', });
lyr_E_Montereas_protegidas_provinciales_12.set('fieldLabels', {'id': 'no label', 'gna': 'inline label - always visible', 'nam': 'no label', 'desig_type': 'no label', 'iucn_cat': 'no label', 'a?o': 'no label', });
lyr_E_MonteRed_vial_rural_13.set('fieldLabels', {'gid': 'no label', 'entidad': 'inline label - visible with data', 'objeto': 'no label', 'caa': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_E_MonteRed_vial_provincial_14.set('fieldLabels', {'gid': 'no label', 'rtn': 'no label', 'typ': 'no label', 'rst': 'no label', 'hct': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_E_MonteRed_vial_nacional_15.set('fieldLabels', {'gid': 'no label', 'rtn': 'no label', 'typ': 'no label', 'rst': 'no label', 'hct': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_E_MonteRed_vial_terciaria_16.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna1': 'no label', 'gna1': 'no label', 'nam1': 'no label', 'fna2': 'no label', 'gna2': 'no label', 'nam2': 'no label', 'fun': 'no label', 'rst': 'no label', 'typ': 'no label', 'mes': 'no label', 'hct': 'no label', 'loc': 'no label', 'fdc': 'no label', 'nr': 'no label', 'sag': 'no label', });
lyr_E_MonteCortinas_forestales_17.set('fieldLabels', {'genero': 'no label', 'longitud': 'no label', });
lyr_E_Montereas_protegidas_privadas_18.set('fieldLabels', {'nombre_are': 'no label', 'categoria_': 'no label', 'area_en_ha': 'no label', 'ecoregion': 'no label', 'adminstrac': 'no label', 'provincia': 'no label', 'a?o_crea': 'no label', 'tipo_instr': 'no label', 'numero_ins': 'no label', });
lyr_E_Montereas_protegidas_privadas_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});