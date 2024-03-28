//Error on line 3 - equality operator error
if( typeof AA == 'undefined' ) AA = {};
if( typeof AA.BB = 'undefined' ) AA.BB = {}; //ERROR LINE. CORRECTION: if( typeof AA.BB == 'undefined' )
if( typeof AA.BB.Editing == 'undefined' ) AA.BB.Editing = {};

AA.BB.Editing.Utils = function()
{
};

