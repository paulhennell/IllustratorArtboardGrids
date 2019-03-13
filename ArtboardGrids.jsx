//@target illustrator
var measurements = get_measurements();

if (measurements){
    alert("message");
}

function get_measurements() {

    var dg = new Window("dialog", "Grid Measurements");
    
    //Layout Columns
    var LayoutGroup = dg.add("group");
    LayoutGroup.add('StaticText{text: "Rows: "}');
    var rows = LayoutGroup.add("edittext");
    rows.text = "1";
    rows.minimumSize.width = 100;
    LayoutGroup.add('StaticText{text: "Columns: "}');
    var cols = LayoutGroup.add("edittext");
    cols.text = "1";
    cols.minimumSize.width = 100;
    
    //Margin Columns
    var MarginGroup = dg.add("group");
    MarginGroup.add('StaticText{text: "Top: "}');
    var top = MarginGroup.add("edittext");
    top.text = "1";
    top.minimumSize.width = 100;
    MarginGroup.add('StaticText{text: "Left: "}');
    var left = MarginGroup.add("edittext");
    left.text = "1";
    left.minimumSize.width = 100;

    var MarginGroup2 = dg.add("group");
    MarginGroup2.add('StaticText{text: "Bottom: "}');
    var bottom = MarginGroup2.add("edittext");
    bottom.text = "1";
    bottom.minimumSize.width = 100;
    MarginGroup2.add('StaticText{text: "Right: "}');
    var right = MarginGroup2.add("edittext");
    right.text = "1";
    right.minimumSize.width = 100;

    //Template Size
    var TemplateGroup2 = dg.add("group");
    TemplateGroup2.add('StaticText{text: "Width: "}');
    var TempWidth = TemplateGroup2.add("edittext");
    TempWidth.text = "1";
    TempWidth.minimumSize.width = 100;
    TemplateGroup2.add('StaticText{text: "height: "}');
    var TempHeight = TemplateGroup2.add("edittext");
    TempHeight.text = "1";
    TempHeight.minimumSize.width = 100;

    //Gap / Pitch
    var GapGroup = dg.add("group");
    GapGroup.add('StaticText{text: "Width: "}');
    var GapHorizontal = GapGroup.add("edittext");
    GapHorizontal.text = "1";
    GapHorizontal.minimumSize.width = 100;
    GapGroup.add('StaticText{text: "height: "}');
    var GapVertical = GapGroup.add("edittext");
    GapVertical.text = "1";
    GapVertical.minimumSize.width = 100;

    //Cancel Buttons
    var myButtonGroup = dg.add("group");
    myButtonGroup.alignment = "right";
    myButtonGroup.add("button", undefined, "OK");
    myButtonGroup.add("button", undefined, "Cancel");

    if (dg.show() === 1) {
            var obj = new Object();
            obj.rows = parseFloat(rows.text) * 2.834645;
            obj.columns  = parseFloat(cols.text) * 2.834645;
            obj.top  = parseFloat(top.text) * 2.834645;
            obj.left = parseFloat(left.text) * 2.834645;
            obj.right = parseFloat(right.text) * 2.834645;
            obj.bottom = parseFloat(bottom.text) * 2.834645;
            obj.width = parseFloat(TempWidth.text) * 2.834645;
            obj.height = parseFloat(TempHeight.text) * 2.834645;
            obj.GapHorizontal = parseFloat(GapHorizontal.text) * 2.834645;
            obj.GapVertical = parseFloat(GapVertical.text) * 2.834645;
            return obj;
    } else {
        return false;
    }
}