import React, { useState } from 'react';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image, ImageBackground,TextInput,Alert} from 'react-native';
import { Icon, Input } from 'react-native-elements';

import data from '../../data.json';

import userinfo from '../../userInfo.json';

const {width:WIDTH} =Dimensions.get('window');


const Slide = ({ title }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            //menu:'none',
            hmenu:false,
            nameIconmenu:'dehaze',
            //
            items:['none','none','none','none','none','none','none','none'],
            //
            miniItems:['none','none','none','none','none','none','none','none'],
            //
            nameIconitems:['chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right'],
            //
            nameIconMiniItems:['chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right'],
            //img:['https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%201?$png$&jpegSize=200&wid=800','https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%204?$png$&jpegSize=100&wid=599','https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%205?$png$&jpegSize=200&wid=800'],
            n:0,

            //set sun/moon background
            bgColor:'#fff',
            bgIcon:'https://cdn-icons-png.flaticon.com/512/169/169367.png',
            textColor:'black',
            iconColor:'#323434',
            borderBColor:'#f3f3f3',
            bgColorB:'#f8f8f8',
            //hien thi list tu m den n
            m:0,
            n:9,
            //du lieu khi an vao dau ... canh nguoi dung
            checklist:['none','none','none','none','none','none','none','none','none','none'],
            checkUserColor:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
            checkIconColor:['#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080',]
        }
    }
    //an/hien menu
    hideMenu(){
        console.log('menu clicked!')    
        this.setState({ 
            hmenu:!this.state.hmenu
        })
        if(this.state.hmenu == false){
            this.setState({
                nameIconmenu:'close',
                
            })
            this.resetHienItem()
        }else{
            this.setState({
                nameIconmenu:'dehaze',
            })
        }
    }

    resetHienItem(){
        this.setState({
             items:['none','none','none','none','none','none','none','none'],
        })
    }
    // an - hien item trong menu

    hideItems(n){
        console.log('items clicked!',n)
        if(this.state.items[n] == 'none'){

            let arr = this.state.items; 
            arr[n] = 'flex';
            let arricon = this.state.nameIconitems;
            arricon[n] = 'keyboard-arrow-down';
            this.setState({
                items:arr,  
                nameIconitems:arricon,
            })
        }else{
            let arr = this.state.items;
            arr[n] = 'none';
            let arricon = this.state.nameIconitems;
            arricon[n] = 'chevron-right';
            this.setState({
                items:arr,
                nameIconitems:arricon,
            })
        }
    }
    //giao dien sang toi
    changeBG(){
        console.log('change background clicked!')
        if(this.state.bgColor == '#0e0f0f'){
            this.setState({
                bgColor:'#fff',
                bgIcon:'https://cdn-icons-png.flaticon.com/512/169/169367.png',
                textColor:'black',
                iconColor:'#323434',
                borderBColor:'#f3f3f3',
                bgColorB:'#f8f8f8'
            })
        }else{
            this.setState({
                bgColor:'#0e0f0f',
                bgIcon:'https://cdn-icons-png.flaticon.com/512/180/180700.png',
                textColor:'#fff',
                iconColor:'#fff',
                borderBColor:'#727272',
                bgColorB:'#4a4a4a'
            })
        }
    }
    //thay phan tu tu m den n
    resetMN(){
        this.setState(
            {
                m:0,
                n:9
            }
        )

    }
    //di toi trang tiep theo
    goto(x){
        console.log(userinfo.user.length);
        let len = userinfo.user.length;
        this.resetCheckUser();
            if((x+1)*10<len){
                this.setState(
                    {
                        m:0+x*10,
                        n:9+x*10
                    }
                )
            }else{
                this.setState(
                    {
                        m:0+x*10,
                        n:len-1
                    }
                )
            }
    }

    resetCheckUser(){
        let checklist1 = ['none','none','none','none','none','none','none','none','none','none'];
        let checkUserColor1 = ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'];
        let checkIconColor1 = ['#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080',]
        this.setState({
            checklist:checklist1,
            checkUserColor:checkUserColor1,
            checkIconColor:checkIconColor1
        })
    }
    //
    checkUser(a){
        //this.resetCheckUser();
        if(this.state.checklist[a] == 'none'){
            let arr12 = ['none','none','none','none','none','none','none','none','none','none']; 
            let checkUserColor1 = ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'];
            let checkIconColor1 = ['#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080',];
            arr12[a] = 'flex';
            checkUserColor1[a] = '#f1facf';
            checkIconColor1[a] = '#b1c379';
            this.setState({
                checklist:arr12,  
                checkUserColor:checkUserColor1,
                checkIconColor:checkIconColor1
            })
        }else{
            let arr12 = ['none','none','none','none','none','none','none','none','none','none']; 
            let checkUserColor1 = ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'];
            let checkIconColor1 = ['#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080',];
            arr12[a] = 'none';
            checkUserColor1[a] = '#fff';
            checkIconColor1[a] = '#808080';
            this.setState({
                checklist:arr12,  
                checkUserColor:checkUserColor1,
                checkIconColor:checkIconColor1
            })
        }
    }
    huongdan(){
        Alert.alert(
            "Hướng dẫn:",
            "Chạm vào người dùng để vào trang thông tin cá nhân",
            [
                {
                    text: "Tiếp",
                    onPress: () => {Alert.alert(
                        "Các chức năng bổ sung:",
                        "Giao diện sáng/tối, phân trang, menu Tab, định dạng Email...",
                        [
                            {
                                text: "Ok",
                                onPress: () => null,
                                style: "cancel",
                            }
                        ]
                    );},
                    style: "cancel",
                }
            ]
        );
    }

    render(){
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height; 
        const { route,navigation } = this.props;
        var lengUser = userinfo.user.length/10|0
        console.log(this.state.checklist);

        const pst = {
            from: {
              opacity: 0,
              left:-700,
            },
            to: { 
              opacity: 1,
              left:0
            },
          }; 


        //
        //User List
        
        var myloop = [];
        
        for(let i = this.state.m;i<=this.state.n;i++){
            myloop.push(
                <View key={i} style={{zIndex: 200,}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('enterprise',{i:i})} style={{height:windowHeight/10,backgroundColor:this.state.checkUserColor[i%10],elevation:2,marginBottom:15,flexDirection:'row',borderRadius:4,}}>
                        <View style={{flex:1,padding:5,alignItems:'center',justifyContent:'center'}}>
                            <View style={{width: windowWidth/9,height:windowWidth/9}}>
                                <Image
                                    style={{
                                        width:'100%',
                                        height:'100%',
                                        borderRadius:50
                                    }}
                                    source={{uri:userinfo.user[i].img}}
                                />
                            </View>
                        </View>
                        <View style={{flex:5,padding:5,justifyContent:'center',borderWidth:0}} >
                            <View style={{}}>
                                <Text style={{fontWeight:'bold',fontSize:20,color:'#565659'}} >{userinfo.user[i].name}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{borderRightWidth:1,paddingRight:5}} >{userinfo.user[i].id}</Text>
                                    <Text style={{paddingLeft:5}} >{userinfo.user[i].email}</Text>
                                </View>
                            </View>
                        </View>
                        
                        <TouchableOpacity style={styles.pressCheckUser} onPress={()=>this.checkUser(i%10)}>
                            <View  style={styles.aCenter}>
                                <Icon color={this.state.checkIconColor[i%10]} style={{}} size={40} name='more-vert'/>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            )
        }
        var myMiniLoop = [];
        
        for(let j = 0;j<=9;j++){
            myMiniLoop.push(
                <View key={j} style={{zIndex:201,position:'absolute',top:j*windowHeight/10+j*15+windowHeight/10,marginTop:10,alignSelf:'flex-end',}}>
                    <View style={{width: windowWidth/1.4,height:windowHeight/10,zIndex: 2000,backgroundColor:'#f1facf',borderRadius:5,elevation:4,flexDirection:'row',display:this.state.checklist[j]}}>
                        <TouchableOpacity onPress={()=>this.huongdan()} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Icon color={'#555556'} style={{}} size={40} name='notifications-none'/>
                            <Text style={{fontSize:11}}>Appointments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.huongdan()} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Icon color={'#555556'} style={{}} size={40} name='note-add'/>
                            <Text style={{fontSize:11}}>Notes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.huongdan()} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Icon color={'#555556'} style={{}} size={40} name='description'/>
                            <Text style={{fontSize:11}}>Documents</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) 
        }
        return(
        <View style={{flex:1,backgroundColor:this.state.bgColor}}>

            <View  style={styles.topBar}>
                <View style={{borderWidth:0,flex:3,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:50,marginBottom:10,}}>
                    <TouchableOpacity  style={styles.menuIcon} onPress={()=>this.hideMenu()}>
                        <Icon color={this.state.iconColor} size={45} name={this.state.nameIconmenu}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoDino} onPress={()=>navigation.navigate('front')}>
                        <Image style={{width:'100%',height:'90%',margin:4}} source={{uri:'https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/281180635_152611243974169_3924143279976580711_n.png?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=GAYA71kYC58AX-TOxt-&_nc_ht=scontent.fhan5-6.fna&oh=00_AT9AWjEh7vrNcaGvr4ZOZnyErmUE9jc8Z_X-Q9fhlFKbGw&oe=628C1144'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sunMoon} onPress={()=>this.changeBG()}>
                        <Image style={{width:30,height:30,margin:4}} source={{uri:this.state.bgIcon}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.normalIcon} onPress={()=>this.huongdan()}>
                        <View style={{borderRadius:20,width:20,height:20,position:'absolute',zIndex: 200,backgroundColor:'#941a21',alignItems:'center',justifyContent:'center',top:'2%',left:'60%'}}>
                            <Text style={{color:'#fff',fontSize:11}}>15</Text>
                        </View>
                        <Icon color={this.state.iconColor} size={35} name='notifications-none'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.normalIcon} onPress={()=>this.huongdan()}>
                        <Icon color={this.state.iconColor} size={35} name='layers'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.normalIcon} onPress={()=>this.huongdan()}>
                        <Icon color={this.state.iconColor} size={35} name='construction'/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View style={{flex:2}}>

            </View>
            {
                //an/hien menu

                this.state.hmenu ? <View style={{flex:11,position:'absolute',top:windowHeight/6,zIndex:2000,width:windowWidth,backgroundColor:'#484848a6',}}>
                <ScrollView  >

                    <View style={{
                        flex:1,
                        backgroundColor:this.state.bgColor,
                        padding:0,
                        marginTop:0,
                        elevation:2,
                        width:windowWidth-20,
                        height:windowHeight,
                    }}> 
                        <View style={styles.input}>
                            <TextInput 
                            style={{flex:9,}}
                            placeholder={'Search'}
                            placeholderTextColor={'#7a7a7a'}
                            underlineColorAndroid='transparent'
                            onChangeText={email => this.setState({ email })}
                            />
                            <TouchableOpacity style={styles.inputIcon}>
                                <Icon name={'search'} size={25} color={'#2d2d2d'} />
                            </TouchableOpacity>
                        </View>
                        {
                            [...Array(data.menu.length)].map((o,n) => {
                                    return(
                                        <View key={n} style={{}}>
                                            <TouchableOpacity style={{padding:10,borderBottomWidth:1,borderColor:this.state.borderBColor,height:60,}}
                                                onPress={()=>this.hideItems(n)}>
                                                <View style={{flex: 5,
                                                        backgroundColor: this.state.bgColor,
                                                        alignItems: 'center',
                                                        width:'100%',
                                                        flexDirection:'row',
                                                        justifyContent:'center'}}>
                                                        <Text style={{
                                                            fontSize:16,
                                                            marginLeft:12,
                                                            color:this.state.textColor,
                                                            flex:1}} >{data.menu[n].name}
                                                        </Text>
                                                        <View style={{flex:1,alignItems:'flex-end'}}>
                                                            <Icon color={'#808080'} style={{}} size={30} name={this.state.nameIconitems[n]}/>
                                                        </View>
                                                </View>
                                            </TouchableOpacity>
                                            {
                                            [...Array(data.menu[n].items.length)].map((o,m) => {
                                                return(
                                                    <View key={m} style={{display:this.state.items[n],}}>
                                                       <View>
                                                            <TouchableOpacity style={{padding:10,height:50,borderColor:this.state.borderBColor,borderBottomWidth:1}}
                                                            onPress={()=>this.huongdan()}>
                                                                <View style={{flex: 5,
                                                                        backgroundColor: this.state.bgColor,     
                                                                        marginLeft:25,
                                                                        width:windowWidth-55,
                                                                        }}>
                                                                    <Text style={{
                                                                            fontSize:15,
                                                                            color:this.state.textColor,
                                                                            fontStyle:'italic'}} >{data.menu[n].items[m].name}</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                )}
                                                )}  

                                        </View>
                                    )
                                })
                        }
                    </View>
                    
                </ScrollView>
            </View> : null
            }
            {
                //End header
            }


            {
                //Noi dung
            }
            <View style={{flex:18,backgroundColor:this.state.bgColor}}>
                <ScrollView style={{flex:1,backgroundColor:'#fff',backgroundColor:this.state.bgColor}}>
                    {
                        // Content
                    }
                    <View style={{height:'4%'}}>

                    </View>
                    <View style={{borderWidth:0,width:'100%'}}>
                        <TouchableOpacity onPress={()=>this.huongdan()} style={{borderWidth:0,flex:1,height:windowHeight/12}}>
                            <View style={styles.viewContact}>
                                <Text style={styles.textContact}>
                                    Contacts
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View  style={styles.userInfoListView}>
                            <View style={{}}>
                                {myloop}
                                {myMiniLoop}
                            </View>
                        </View>
                        
                        {
                            //Phan trang
                        }
                        <View style={{height:windowHeight/10,alignItems:'center'}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
                                {
                                            
                                    [...Array(lengUser+1)].map((o,n) => {
                                        if(n*10==this.state.m){
                                            return(
                                                <TouchableOpacity key={n} onPress={()=>null} style={styles.btnCList}>
                                                    <Text style={{color:'#fff',fontSize:15,}}>{n+1}</Text>
                                                </TouchableOpacity>
                                            )
                                        }else{
                                            return(
                                                <TouchableOpacity key={n} onPress={()=>this.goto(n)} style={styles.btnList}>
                                                    <Text style={{color:'#b9b9b9',fontSize:15,}}>{n+1}</Text>
                                                </TouchableOpacity>
                                            )
                                            
                                        }
                                    }
                                    )
                                }
                            </ScrollView>
                        </View>
                    </View> 
                    <View style={{height:windowHeight/5}}>

                    </View>
                </ScrollView>


                


                {
                    // Footer
                }


                <View style={{height:windowHeight/9,paddingTop:2,paddingLeft:2,paddingRight:2,elevation:5,width:'95%',borderTopRightRadius:32,alignSelf:'center',
                                borderTopLeftRadius:32,position: 'absolute',zIndex: 2000,top:'88%',backgroundColor:'#fff'}}>
                    <View  style={styles.footerA}>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="help-outline" size={30} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="assignment-late" size={30} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}>Quick Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4Center} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="add" size={50} color="#fff"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="description" size={30} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}>Excel Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="more-vert" size={40} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        
    )
}
};
const styles = StyleSheet.create({
    footer: {
        height:60,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'row',
        elevation:3,
      },
      c4Center:{
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        borderRadius:50,
        borderWidth:3,
        borderColor:'#fff',
        width: 80,
        height:80, 
        top:'-30%',
        backgroundColor:'#991b20',
        
      },
      c4: { 
        padding:10,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:0,
        top:'0%',
      },
    input:{
        width:WIDTH -60,
        height:45,
        borderRadius:4,
        fontSize:16,
        paddingLeft:10,
        borderColor:'#d3d3d3',
        borderWidth:1,
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:10,
        justifyContent:'center',
        flexDirection:'row',
    },
    inputIcon:{
        flex:1,
        //borderWidth:1,
        paddingRight:5,
        alignSelf:'center',
        height:'100%',
        justifyContent:'center'
    },
    btnCList:{
        borderWidth:0,
        margin:5,
        height:50,
        width: 50,
        borderRadius:30,
        //borderColor:'#1CC625',
        backgroundColor:'#b1c379',
        alignItems:'center',
        justifyContent:'center',
    },
    btnDList:{
        borderWidth:0,
        margin:5,
        height:50,
        width: 50,
        borderRadius:30,
        //borderColor:'#1CC625',
        backgroundColor:'#79c98b8f',
        alignItems:'center',
        justifyContent:'center',
    },
    btnList:{
        borderWidth:1,
        margin:5,
        height:50,
        width: 50,
        borderRadius:30,
        borderColor:'#b9b9b9',
        alignItems:'center',
        justifyContent:'center',
    },
    imgForUser:{
        width:'100%',
        height:'100%',
        borderRadius:50
    },
    viewInfoUser:{
        flex:5,
        padding:5,
        justifyContent:'center'
    },
    userInfoName:{
        fontWeight:'bold',
        fontSize:20,
        color:'#565659'
    },
    userInfoId:{
        borderRightWidth:1,
        paddingRight:5,
    },
    userInfoEmail:{
        paddingLeft:5,
    },
    pressCheckUser:{
        flex:1,
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    },
    aCenter:{
        alignItems:'center',
        justifyContent:'center'
    },
    topBar:{
        flexDirection:'row',
        backgroundColor:'#bcd280',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        padding:10,
        position:'absolute',
        zIndex: 2000,
    },
    insTopBar:{
        borderWidth:0,
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:70,
        marginBottom:10,
    },
    menuIcon:{
        borderWidth:0,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoDino:{
        borderWidth:0,
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        height:'70%',
    },
    sunMoon:{
        borderWidth:0,
        alignItems:'center',
        flex:2,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    normalIcon:{
        borderWidth:0,
        padding:2,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    viewContact:{
        borderWidth:0,
        width: '100%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:10,
    },
    textContact:{
        fontSize:28,
        color:'#941a21',
        textDecorationLine: 'underline',
        fontWeight:'bold'
    },
    userInfoListView:{
        borderWidth:0,
        flex:9,
        padding:10,
    },
    footerA:{
        backgroundColor: '#bcd280',
        height:'100%',
        alignSelf:'center',
        alignItems: 'center',
        flexDirection:'row',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    }
    
});
export default Home;

