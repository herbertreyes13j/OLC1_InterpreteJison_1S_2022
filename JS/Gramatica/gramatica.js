/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,13],$V2=[1,14],$V3=[1,15],$V4=[1,16],$V5=[1,17],$V6=[5,17,20,21,22,26,27,28],$V7=[8,16],$V8=[1,39],$V9=[1,34],$Va=[1,33],$Vb=[1,35],$Vc=[1,36],$Vd=[1,37],$Ve=[1,38],$Vf=[5,17,20,21,22,25,26,27,28],$Vg=[1,45],$Vh=[1,46],$Vi=[1,47],$Vj=[1,48],$Vk=[1,49],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[1,54],$Vq=[1,55],$Vr=[1,56],$Vs=[1,57],$Vt=[1,58],$Vu=[1,59],$Vv=[8,24,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],$Vw=[8,24,29,30,35,36,37,38,39,40,41,42,43],$Vx=[8,24,29,30,31,32,34,35,36,37,38,39,40,41,42,43],$Vy=[8,24,35,36,37,42,43];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"S":3,"SENTENCIAS":4,"EOF":5,"SENTENCIA":6,"DECLARACION_1":7,"Tok_pyc":8,"ASIGNACION":9,"BLOQUE":10,"IF":11,"WHILE":12,"DO_WHILE":13,"PRINT":14,"ID_LIST":15,"Tok_coma":16,"Tok_ID":17,"Tok_asigna1":18,"EXP":19,"Tok_llav1":20,"Tok_llav2":21,"Tok_if":22,"Tok_par1":23,"Tok_par2":24,"Tok_else":25,"Tok_while":26,"Tok_do":27,"Tok_print":28,"Tok_mas":29,"Tok_menos":30,"Tok_por":31,"Tok_div":32,"Tok_pot":33,"Tok_mod":34,"Tok_diferente":35,"Tok_igual":36,"Tok_igualr":37,"Tok_mayor":38,"Tok_menor":39,"Tok_mayori":40,"Tok_menori":41,"Tok_and":42,"Tok_or":43,"Tok_not":44,"Tok_string":45,"Tok_numero":46,"Tok_true":47,"Tok_false":48,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"Tok_pyc",16:"Tok_coma",17:"Tok_ID",18:"Tok_asigna1",20:"Tok_llav1",21:"Tok_llav2",22:"Tok_if",23:"Tok_par1",24:"Tok_par2",25:"Tok_else",26:"Tok_while",27:"Tok_do",28:"Tok_print",29:"Tok_mas",30:"Tok_menos",31:"Tok_por",32:"Tok_div",33:"Tok_pot",34:"Tok_mod",35:"Tok_diferente",36:"Tok_igual",37:"Tok_igualr",38:"Tok_mayor",39:"Tok_menor",40:"Tok_mayori",41:"Tok_menori",42:"Tok_and",43:"Tok_or",44:"Tok_not",45:"Tok_string",46:"Tok_numero",47:"Tok_true",48:"Tok_false"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,1],[6,1],[6,1],[6,2],[6,1],[7,1],[15,3],[15,1],[9,3],[10,3],[10,2],[11,5],[11,7],[12,5],[13,6],[14,5],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,2],[19,3],[19,1],[19,1],[19,1],[19,1],[19,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$=new AST_Node("RAIZ","RAIZ",this.$first_line,_$[$0-1].last_column);this.$.addChilds($$[$0-1]);return this.$
break;
case 2:
$$[$0-1].addChilds($$[$0]);this.$=$$[$0-1];
break;
case 3:
this.$= new AST_Node("SENTENCIAS","SENTENCIAS",this._$.first_line,_$[$0].last_column);
                      this.$.addChilds($$[$0]);
break;
case 4: case 5: case 9: case 38:
this.$=$$[$0-1]
break;
case 6: case 7: case 8: case 10:
this.$=$$[$0]
break;
case 11:
this.$= new AST_Node("DECLARACION","DECLARACION",this._$.first_line,_$[$0].first_column); this.$.addChilds($$[$0])
break;
case 12:
$$[$0-2].addChilds(new AST_Node("ID",$$[$0],this._$.first_line,_$[$0].first_column)); this.$=$$[$0-2];
break;
case 13:
this.$= new AST_Node("ID_LIST","ID_LIST"); this.$.addChilds(new AST_Node("ID",$$[$0],this._$.first_line,_$[$0].first_column))
break;
case 14:
this.$=new AST_Node("ASIGNACION","ASIGNACION",this._$.first_line,_$[$0-2].last_column); 
                                            this.$.addChilds(new AST_Node("id",$$[$0-2],this._$.first_line,_$[$0-2].last_column),$$[$0]);
break;
case 15:
this.$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,_$[$0-2].last_column); this.$.addChilds($$[$0-1])
break;
case 16:
this.$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,_$[$0-1].last_column);
break;
case 17:
this.$= new AST_Node("IF","IF",this._$.first_line,_$[$0-4].last_column);this.$.addChilds($$[$0-2],$$[$0])
break;
case 18:
this.$= new AST_Node("IF","IF",this._$.first_line,_$[$0-6].last_column); var aux = new AST_Node("ELSE","ELSE",this._$.first_line,_$[$0-1].last_column); aux.addChilds($$[$0]);this.$.addChilds($$[$0-4],$$[$0-2],aux)
break;
case 19:
this.$=new AST_Node("WHILE","WHILE",this._$.first_line,_$[$0-4].last_column); this.$.addChilds($$[$0-2],$$[$0])
break;
case 20:
this.$=new AST_Node("DO_WHILE","DO_WHILE",this._$.first_line,_$[$0-5].last_column);this.$.addChilds($$[$0-4],$$[$0-1])
break;
case 21:
this.$= new AST_Node("PRINT","PRINT",this._$.first_line,_$[$0-4].last_column); this.$.addChilds($$[$0-2]);
break;
case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0-1].last_column);this.$.addChilds($$[$0-2],new AST_Node("op",$$[$0-1],this._$.first_line,_$[$0-1].last_column),$$[$0]);
break;
case 37:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("op",$$[$0-1],this._$.first_line,_$[$0-1].last_column),$$[$0]);
break;
case 39:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);
                                         var text = $$[$0].substr(0,$$[$0].length);
                                         text=text.replace(/\\n/g,"\n");
                                         text=text.replace(/\\t/g,"\t");
                                         text=text.replace(/\\r/g,"\r");
                                         text=text.replace(/\\\\/g,"\\");
                                         text=text.replace(/\\\"/g,"\"");
                                        this.$.addChilds(new AST_Node("string",text,this._$.first_line,_$[$0].last_column));
break;
case 40:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("numero",$$[$0],this._$.first_line,_$[$0].last_column));
break;
case 41:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("true",$$[$0],this._$.first_line,_$[$0].last_column));
break;
case 42:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("false",$$[$0],this._$.first_line,_$[$0].last_column));
break;
case 43:
this.$= new AST_Node("EXP","EXP",this._$.first_line,_$[$0].last_column);this.$.addChilds(new AST_Node("id",$$[$0],this._$.first_line,_$[$0].last_column));
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,17:$V0,20:$V1,22:$V2,26:$V3,27:$V4,28:$V5},{1:[3]},{5:[1,18],6:19,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,17:$V0,20:$V1,22:$V2,26:$V3,27:$V4,28:$V5},o($V6,[2,3]),{8:[1,20]},{8:[1,21]},o($V6,[2,6]),o($V6,[2,7]),o($V6,[2,8]),{8:[1,22]},o($V6,[2,10]),{8:[2,11],16:[1,23]},o($V7,[2,13],{18:[1,24]}),{4:25,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,17:$V0,20:$V1,21:[1,26],22:$V2,26:$V3,27:$V4,28:$V5},{23:[1,27]},{23:[1,28]},{10:29,20:$V1},{23:[1,30]},{1:[2,1]},o($V6,[2,2]),o($V6,[2,4]),o($V6,[2,5]),o($V6,[2,9]),{17:[1,31]},{17:$V8,19:32,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{6:19,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,17:$V0,20:$V1,21:[1,40],22:$V2,26:$V3,27:$V4,28:$V5},o($Vf,[2,16]),{17:$V8,19:41,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:42,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{26:[1,43]},{17:$V8,19:44,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},o($V7,[2,12]),{8:[2,14],29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu},{17:$V8,19:60,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:61,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},o($Vv,[2,39]),o($Vv,[2,40]),o($Vv,[2,41]),o($Vv,[2,42]),o($Vv,[2,43]),o($Vf,[2,15]),{24:[1,62],29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu},{24:[1,63],29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu},{23:[1,64]},{24:[1,65],29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu},{17:$V8,19:66,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:67,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:68,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:69,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:70,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:71,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:72,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:73,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:74,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:75,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:76,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:77,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:78,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:79,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{17:$V8,19:80,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},o($Vv,[2,37]),{24:[1,81],29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu},{10:82,20:$V1},{10:83,20:$V1},{17:$V8,19:84,23:$V9,44:$Va,45:$Vb,46:$Vc,47:$Vd,48:$Ve},{8:[1,85]},o($Vw,[2,22],{31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vw,[2,23],{31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vx,[2,24],{33:$Vk}),o($Vx,[2,25],{33:$Vk}),o($Vx,[2,26],{33:$Vk}),o($Vx,[2,27],{33:$Vk}),o($Vy,[2,28],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,38:$Vp,39:$Vq,40:$Vr,41:$Vs}),o($Vy,[2,29],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,38:$Vp,39:$Vq,40:$Vr,41:$Vs}),o($Vy,[2,30],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,38:$Vp,39:$Vq,40:$Vr,41:$Vs}),o($Vy,[2,31],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vy,[2,32],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vy,[2,33],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vy,[2,34],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o([8,24,42,43],[2,35],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs}),o([8,24,43],[2,36],{29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt}),o($Vv,[2,38]),o($V6,[2,17],{25:[1,86]}),o($V6,[2,19]),{24:[1,87],29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu},o($V6,[2,21]),{10:88,20:$V1},{8:[2,20]},o($V6,[2,18])],
defaultActions: {18:[2,1],87:[2,20]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


    function AST_Node(tag,value,fila,columna){
        this.tag=tag;
        this.value=value;
        this.fila=fila;
        this.columna=columna;

        //Vamos a definir que tenga hijos
        this.childs=[]
        this.addChilds=addChilds;
        this.getSon=getSon;

        function addChilds(){
            for(var i =0; i< arguments.length;i++){
                this.childs.push(arguments[i]);
                if(arguments[i]!==null){
                    arguments[i].padre=this;
                }
            }
        }

        function getSon(pos){
            if(pos >this.hijos.length - 1)return null;
            return this.hijos[pos];
        }
    }

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// se ignoran los espacios en blanco
break;
case 1:// comentarios de simple linea
break;
case 2:return 47
break;
case 3:return 48
break;
case 4:return 'Tok_double'
break;
case 5:return 22
break;
case 6:return 28 
break;
case 7:return 25  
break;
case 8:return 26 
break;
case 9:return 27
break;
case 10:return 40
break;
case 11:return 41
break;
case 12:return 36
break;
case 13:return 8
break;
case 14:return 16
break;
case 15:return 18
break;
case 16:return 'Tok_cor1'
break;
case 17:return 'Tok_cor2'
break;
case 18:return 23
break;
case 19:return 24
break;
case 20:return 20
break;
case 21:return 21
break;
case 22:return 30
break;
case 23:return 35
break;
case 24:return 44
break;
case 25:return 33
break;
case 26:return 31
break;
case 27:return 32
break;
case 28:return 34
break;
case 29:return 29
break;
case 30:return 38
break;
case 31:return 39
break;
case 32:return 42
break;
case 33:return 43
break;
case 34: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 45; 
break;
case 35:return 46;
break;
case 36:return 17;
break;
case 37:return 5;
break;
case 38: console.error('Este es un error l??xico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                                          L_Error.getInstance().insertar(new N_Error("Lexico","Caracter: \" "+yy_.yytext+"\" no es valido" ,yy_.yylloc.first_line,yy_.yylloc.first_column));
                                          return null; 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:double\b)/i,/^(?:if\b)/i,/^(?:print\b)/i,/^(?:else\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:>=)/i,/^(?:<=)/i,/^(?:==)/i,/^(?:;)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:-)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:\^\^)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\+)/i,/^(?:>)/i,/^(?:<)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:"[^\"]*")/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}