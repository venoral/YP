'use strict'

!(function( w, d, doT, $ ){

    w.data = [
        {
            'title': '通信与信息工程学院',
            'index': 'txyxxgcxy',
            'items': [{"label":"院长：卢光跃","index":"lgy","value":"电话：88166378"},{"label":"党总支书记、副院长：王大力","index":"wdl","value":"电话：88166379"},{"label":"副书记：唐黎","index":"tl","value":"电话：88166152"},{"label":"副院长：刘颖","index":"ly","value":"电话：88166465"},{"label":"副院长：赵小强","index":"zxq","value":"电话：88166380"},{"label":"副院长：孙爱晶","index":"saj","value":"电话：88166380"}]
        },
        {
            'title': '电子工程学院',
            'index': 'dzgcxy',
            'items': [{"label":"院长：巩稼民","index":"gjm","value":"电话：88166262"},{"label":"党委书记兼副院长：苗忠","index":"mz","value":"电话：88166261"},{"label":"副院长：刘继红","index":"ljh","value":"电话：88166263"},{"label":"副院长：杜慧敏","index":"dhm","value":"电话：88166263"},{"label":"副书记：李莉","index":"ll","value":"电话：88166470"},{"label":"13115工程中心总工程师：李涛","index":"lt","value":"电话：88166785"},{"label":"13115工程中心专职副主任：吕菱","index":"ll","value":"电话：88166769"},{"label":"技术中心副主任：张博","index":"zb","value":"电话：88166769"}]
        },
        {
            'title': '计算机学院',
            'index': 'jsjxy',
            'items': [{"label":"院长：王忠民","index":"wzm","value":"电话：88166290"},{"label":"党委书记、副院长：葛茂","index":"gm","value":"电话：88166293"},{"label":"副院长：王曙燕","index":"wsy","value":"电话：88166291"},{"label":"副院长：周晓辉","index":"zxh","value":"电话：88166291"},{"label":"党委副书记：田东","index":"td","value":"电话：88166291"},{"label":"副院长：翟社平","index":"zsp","value":"电话：88166291"}]
        },
        {
            'title': '自动化学院',
            'index': 'zdhxy',
            'items': [{"label":"院长：王文庆","index":"wwq","value":"电话：88166331"},{"label":"党总支书记、副院长：马斌奇","index":"mbq","value":"电话：88166339"},{"label":"副院长：袁立行","index":"ylx","value":"电话：88166330"},{"label":"副院长：蔡秀梅","index":"cxm","value":"电话：88166598"},{"label":"党总支副书记：卢岩","index":"ly","value":"电话：88166596"}]
        },
        {
            'title': '经济与管理学院',
            'index': 'jjyglxy',
            'items': [{"label":"名誉院长：郭建峰","index":"gjf","value":"电话：88166759"},{"label":"院长：张鸿","index":"zh","value":"电话：88166270"},{"label":"院党委书记、副院长：樊广义","index":"fgy","value":"电话：88166023"},{"label":"常务副院长：楼旭明","index":"lxm","value":"电话：88166277"},{"label":"副院长：李永红","index":"lyh","value":"电话：88166113"},{"label":"副院长：李鹏飞","index":"lpf","value":"电话：88166708"},{"label":"院党委副书记：任辉","index":"rh","value":"电话：88166472"},{"label":"院党委副书记：郭黎","index":"gl","value":"电话：85383162"}]
        },
        {
            'title': '理学院',
            'index': 'lxy',
            'items': [{"label":"院长：徐建刚","index":"xjg","value":"电话：88166333"},{"label":"党委书记、副院长：杨爽","index":"ys","value":"电话：88166650"},{"label":"副院长：高军安","index":"gja","value":"电话：88166334"},{"label":"副院长：廖延娜","index":"lyn","value":"电话：88166332"}]
        },
        {
            'title': '人文社科学院',
            'index': 'rwskxy',
            'items': [{"label":"院长：张学广","index":"zxg","value":"电话：88166355"},{"label":"党委书记兼副院长：王嗣源","index":"wsy","value":"电话：88166356"},{"label":"副院长：王艾青","index":"waq","value":"电话：88166090"}]
        },
        {
            'title': '外国语学院',
            'index': 'wgyxy',
            'items': [{"label":"院长：袁小陆","index":"yxl","value":"电话:88166361"},{"label":"党总支书记、副院长：姜艳萍","index":"jyp","value":"电话:88166360"},{"label":"副院长：陈德","index":"cd","value":"电话:88166198"}]
        },
        {
            'title': '数字艺术学院（艺术教育中心）',
            'index': 'szysxy ysjyzx',
            'items': [{"label":"院长：马力","index":"ml","value":"电话：88166069"},{"label":"院党总支书记：张涛","index":"zt","value":"电话：88166063"},{"label":"副院长：闫兴亚","index":"yxy","value":"电话：88166124"}]
        },
        {
            'title': '继续教育学院、职业技术学院',
            'index': 'jxjyxy zyjsxy',
            'items': [{"label":"院长：薛蓉娜","index":"xrn","value":"电话：85383456"},{"label":"党委书记兼副院长：曹利戈","index":"clg","value":"电话：85383204"},{"label":"副院长：郭琪","index":"gq","value":"电话：85383450"},{"label":"副院长：张宁","index":"zn","value":"电话：85383164"}]
        },
        {
            'title': '体育部',
            'index': 'tyb',
            'items': [{"label":"主任：李静","index":"lj","value":"电话：88166241"},{"label":"副主任：韩伟","index":"hw","value":"电话：88166241"},{"label":"副主任：吴玲珍","index":"wlz","value":"电话：88166241"}]
        },
        {
            'title': '物联网与两化融合研究院',
            'index': 'wlwylhrhyjy',
            'items': [{"label":"院长：朱志祥","index":"zzx","value":"电话：85383425"},{"label":"副院长：陈文艺","index":"cwy","value":"电话：85383469"},{"label":"副院长：祁宗全","index":"zzq","value":"电话：85383006"},{"label":"副院长：魏巍","index":"ww","value":"电话：85253977"},{"label":"副院长：惠小强","index":"hxq","value":"电话：85383209"}]
        },
        {
            'title': '马克思主义教育研究院',
            'index': 'mkszyjyyjy',
            'items': [{"label":"院长：董小龙","index":"dxl","value":"电话：88166357"},{"label":"常务副院长：马智","index":"mz","value":"电话：88166092"}]
        },
        {
            'title': '国防教育学院',
            'index': 'gfjyxy',
            'items': [{"label":"常务副院长：张继荣","index":"zjr","value":"电话：88166162"},{"label":"副院长：黄小梅","index":"hxm","value":"电话：88166157"},{"label":"副院长：梁琨","index":"lk","value":"电话：88166071"},{"label":"副院长：赵补生","index":"zbs","value":"电话：88166197"}]
        },
        {
            'title': '国际合作与交流处',
            'index': 'gjhzyjlc',
            'items': [{"label":"办公室电话","index":"bgs","value":"电话/传真：88166107"}]
        },
        {
            'title': '学校办公室',
            'index': 'xxbgs',
            'items': [{'label':'主任：郑大远','index':'zdy','value':'电话：88166006'},{'label':'副主任：刘勇','index':'ly','value':'电话：88166007'},{'label':'副主任：杨旸','index':'yy','value':'电话：88166305'}]
        },
        {
            'title': '教务处',
            'index': 'jwc',
            'items': [{'label':'处长：樊相宇','index':'fxy','value':'电话：88166161'},{'label':'副处长：张继荣','index':'zjr','value':'电话：88166162'},{'label':'副处长：阴亚芳','index':'yyf','value':'电话：88166162'},{'label':'副处长：宋金锁','index':'sjs','value':'电话：88166163'},{'label':'副处长：张二锋','index':'zef','value':'电话：88166163'},{'label':'评估办副主任：窦彩兰','index':'dcl','value':'电话：88166170'}]
        },
        {
            'title': '学生处',
            'index': 'xsc',
            'items': [{'label':'部长、处长：樊继福','index':'fjf','value':'电话：88166158'},{'label':'副部长、副处长：黄小梅','index':'hxm','value':'电话：88166157'},{'label':'副部长、副处长：梅永刚','index':'myg','value':'电话：88166483'}]
        },
        {
            'title': '信息中心',
            'index': 'xxzx',
            'items': [{'label':'主任：刘建华','index':'ljh','value':'电话：88166594'},{'label':'副主任：刘国营','index':'lgy','value':'电话：88166129'}]
        },
        {
            'title': '招生就业处',
            'index': 'zsjyc',
            'items': [{'label':'处长：巩红','index':'gh','value':'电话：88166196'},{'label':'副处长：王颖','index':'wy','value':'电话：88166195'},{'label':'副处长：赵补生','index':'zbs','value':'电话：88166199'},{'label':'办公室电话','index':'bgs','value':'电话：88166193'}]
        },
        {
            'title': '图书馆',
            'index': 'tsg',
            'items': [{'label':'馆长：吕建平','index':'ljp','value':'电话：88166251'},{'label':'副馆长：吴新星','index':'wxx','value':'电话：88166389'},{'label':'副馆长：宋德义','index':'sdy','value':'电话：88166252'}]
        },
        {
            'title': '卫生所',
            'index': 'wss',
            'items': [{'label':'所长：段培真','index':'dpz','value':'电话：85383190'},{'label':'副所长：尚爱梅','index':'sam','value':'电话：85383182'}]
        }
    ];
    w.datas=[
    {
      'title': '旭日苑',
      'index': 'xry',
      'items': [{"label":"鸡汤刀削面","index":"jtdxm","value":"电话：15891368113"},
                {"label":"本土农家面","index":"btnjm","value":"电话：15991774812"},
                {"label":"蜀香园","index":"sxy","value":"电话：18709185471"},
                {"label":"川味小炒","index":"cwxc","value":"电话：15594833392<br>(微信：1453105640)"},
                {"label":"东兴蒸菜套餐","index":"zxq","value":"电话：18191201036"},
                {"label":"重庆砂锅(十号楼旁边)","index":"cqsg","value":"电话：13468603710"},
                {"label":"绝味冒菜","index":"jwmc","value":"电话：15238777089"},
                {"label":"汉中米皮(夹馍)","index":"hzmp","value":"电话：13572052341"},
                {"label":"罐罐面","index":"ggm","value":"电话：13152199626"},
                {"label":"小馋虫烩麻食","index":"xcchms","value":"电话：13186023510"},
                {"label":"胡辣汤","index":"hlt","value":"电话：18192535818"},
                {"label":"南方风味饼","index":"nffwb","value":"电话：13637280108"},
                {"label":"重庆小面","index":"cqxm","value":"电话：13891944505"},
                {"label":"重庆砂锅(一号楼旁)","index":"cqsg","value":"电话：18791984854"},
                {"label":"铁板炒饭","index":"tbcf","value":"电话：15891485968"},
                {"label":"面包房(二楼)","index":"mbf","value":"电话：18700941400"},
                {"label":"好再来拉面馆","index":"hzlmg","value":"电话：18133928198"},
                {"label":"湖南土菜馆","index":"hntcg","value":"电话：18629303692"},
                {"label":"重庆鸡公煲","index":"cqjgb","value":"电话：18710901608"},
                {"label":"黄焖鸡","index":"hmj","value":"电话：18966898239"},
                {"label":"刘记广式快餐","index":"ljgskc","value":"电话：13772063688"},
                {"label":"东北饺子","index":"dbjz","value":"电话：18092384410"},
                {"label":"十里香馄饨王","index":"slxhdw","value":"电话：15229388559"},
                {"label":"重庆冒菜","index":"cqmc","value":"电话：18223762288"},
                {"label":"铁蛋刀削面","index":"tddxm","value":"电话：15229089316"},
                {"label":"香辣炸鸡饭","index":"xlzjf","value":"电话：15655859552"},
                {"label":"爱尚麻辣烫香锅","index":"asmltxg","value":"电话：18710498933"},
                {"label":"楞娃手擀面","index":"lwsgm","value":"电话：13572012628"},
                {"label":"煲仔饭","index":"bfz","value":"电话：15991759916"},
                {"label":"湘式阿Q盖浇饭","index":"xsaqgjf","value":"电话：13927729685"}
              ]
    },
    {
      'title':'美食广场',
      'index':'msgc',
      'items':[{"label":"云南傣家米线","index":"yndjmx","value":"电话：1328895525<br>(微信：569234179)"},
               {"label":"川味小炒","index":"cwxc","value":"电话：15529050812"},
               {"label":"宜宾特色燃面","index":"ybtsrm","value":"电话：13572107991"},
               {"label":"金柳叶刀削面","index":"jlydxm","value":"电话：13619293162"},
               {"label":"东北饺子","index":"dbjz","value":"电话：13720658019"},
               {"label":"港式粥面小厨","index":"gszmxc","value":"电话：18291815322"},
               {"label":"肉夹馍","index":"rjm","value":"电话：13892827788"},
               {"label":"傻得冒冒菜","index":"sdmmc","value":"电话：13299112980"},
               {"label":"兄弟面屋","index":"xdmw","value":"电话：13474136133"},
               {"label":"重庆小面特色炒烩","index":"cqxmtsch","value":"电话：13679138197"},
               {"label":"溢香园饺子","index":"yxyjz","value":"电话：18729305228"},
               {"label":"冷热麻食","index":"lrms","value":"电话：18717372714"},
               {"label":"粗粮面(洋芋叉叉粗粮面)","index":"yyccclm","value":"电话：15609232991"},
               {"label":"岐山擀面皮","index":"qsgmp","value":"电话：18509291588"},
               {"label":"金马鸡汤刀削面","index":"jmjtdxm","value":"电话：15339268668"},
               {"label":"食话食说快餐","index":"shshkc","value":"电话：13259952176"},
               {"label":"西府削筋面(油条)","index":"xfxjmyt","value":"电话：15332376980"},
               {"label":"安徽风味饼","index":"ahfwb","value":"电话：13289201080"},
               {"label":"三月半骨汤冒菜","index":"sybgtmc","value":"电话：18240898299"},
               {"label":"荆记粥铺","index":"jjzp","value":"电话：15891758499"},
               {"label":"湘川快餐","index":"xckc","value":"电话：15529209809"},
               {"label":"百滋牛扒","index":"bznp","value":"电话：15691976164"},
               {"label":"薛家凉皮砂锅","index":"xjlpsg","value":"电话：18182424686"},
               {"label":"福建沙县营养小吃","index":"fjsxyyxc","value":"电话：15934896491"},
               {"label":"百味香快餐","index":"bwxkq","value":"电话：15829103748"},
               {"label":"黄焖鸡米饭","index":"hmjmf","value":"电话：13186199559"},
               {"label":"兰州牛肉拉面","index":"lznrlm","value":"电话：15398032140"},
               {"label":"煲仔饭","index":"bzf","value":"电话：18829277763"},
               {"label":"夹拣成厨香锅","index":"jlccxg","value":"电话：18710296710"},
               {"label":"台湾卤肉饭","index":"twlrf","value":"电话：18062672001"},
               {"label":"缘福记小笼包","index":"yfjxlb","value":"电话：15129081363"}
              ]
    }
    ];
    $( '#takeout' ).html( doT.template( $( '#item-to' ).html() )() );
    $( '#main' ).html( doT.template( $( '#item-tp' ).html() )() );

    $( '.search' ).on('input', function(){

        let keyword = this.value.trim().toLocaleLowerCase();
        let resName, resTitle, searched = {};
        if( !keyword ){
            $( '#search-result' ).addClass( 'hide' );
            return false;
        }

        $( '#search-result' ).removeClass( 'hide' );
        $( '#search-key' ).text( keyword );

        if($( '#item1' ).hasClass('borderbottom')){
            resName = $( `tr[datas-index*=${keyword}]` );

            resTitle = $( `table[datas-index*=${keyword}]` );

          }else if($( '#item2' ).hasClass('borderbottom')){
            resName = $( `tr[data-index*=${keyword}]` );

            resTitle = $( `table[data-index*=${keyword}]` );
          }


        resName.each(function( i, e ){
            let item = $( e ),
                title = item.attr( 'data-from' );

            if( !searched[title] ){
                searched[title] = [];
            }
            searched[title].push( e.outerHTML.replace( /data.*?">/g, '>' ) );
        });

        resTitle.each(function( i, e ){
            let item = $( e ),
                title = item.attr( 'data-title' );

            searched[title] = [ item.html().replace( /data.*?">/g, '>' ) ];
        });

        w.searched = searched;

        $( '#search-res' ).html( doT.template( $( '#searched-tp' ).html() )() );

    });


    //tab切换
    let flag = 'takeout';
    $( 'li#item1' ).on( 'tap', function( event ){

          if(flag =='takeout'){
            return;
          }
          $( this ).addClass( 'borderbottom' ).siblings( 'li' ).removeClass( 'borderbottom' );

          $( 'div#wrap' ).addClass( 'slideright' ).removeClass( 'slideleft' );
          //优化延迟造成的空白档
          setTimeout(function(){
            if(flag == 'main' ){
               return;
            }else{
            $( '#main' ).addClass( 'hide' );
           }
          }, 500);

          flag='takeout';

    });

    $( 'li#item2' ).on( 'tap', function(event){
        if(flag=='main'){
          return;
        }
        $('#main').removeClass('hide');
        $( this ).addClass( 'borderbottom' ).siblings( 'li' ).removeClass( 'borderbottom' );

        $( 'div#wrap' ).addClass( 'slideleft' ).removeClass( 'slideright' );
        flag='main';
    });


})( window, document, doT, Zepto );
