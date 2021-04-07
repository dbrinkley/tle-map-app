<?

include("../includes/connect-tle.inc" );

//vs.vendor_id, vs.block_name, nv.company_name, nv.logo, nv.profile, nv.email, nv.address, nv.city, 
//nv.state, nv.zip, nv.phone, nv.fax

//need to get product xlist categoires and story in array for category sections


$completeObjStr = "{";


$sql = "SELECT vs.vendor_id, vs.block_name, nv.company_name, nv.logo, nv.profile, nv.email, nv.address, nv.city, nv.state,               nv.zip, nv.phone, nv.fax 
        FROM vshows AS vs
        LEFT JOIN new_vendor AS nv ON nv.id = vs.vendor_id
        WHERE tsname LIKE '%TLE-LB 20%'";

      
$result = $conn->query($sql);  


    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
          
      //data-xlist getter - gets parent xlist category from vendor products to place into data-xlist attribute - START
      $currentXlist = array();

      $sqlxlist = "SELECT xlist FROM vendor_product WHERE vendor_product.vendor_id = " . $row['vendor_id'] . " AND vendor_product.series_product = 0";
      $resultxlist = $conn->query($sqlxlist);	


      while($rowxlist = mysqli_fetch_array($resultxlist)) {

        $sql2 = "SELECT id, idParent FROM xlist WHERE id = " . $rowxlist[0];
        $result2 = $conn->query($sql2);	

        while($row2 = mysqli_fetch_array($result2)) {
          array_push($currentXlist, $row2['idParent']);
        }
      }
      //array of product xlist categories
      $currentXlist = '[' . implode(",", array_unique($currentXlist)) . ']';
      //data-xlist getter END

      $completeObjStr .= "\"" . $row['vendor_id'] . "\": {";
      
      foreach($row as $key => $element){
        
        if($key == "profile"){
          $curProfile = $element;
          $curProfile = str_replace("<br>", "", $curProfile);
          $curProfile = str_replace("<br/>", "", $curProfile);
          $curProfile = str_replace("<br />", "", $curProfile);
          $curProfile = str_replace("\r\n", "", $curProfile);
          
          $completeObjStr .= "\"" . $key . "\": \"" . $curProfile . "\",";
          
        } else if ($key == "fax"){
          
          $completeObjStr .= "\"" . $key . "\": \"" . $element . "\",";
          $completeObjStr .= "\"xlist\": \"" . $currentXlist . "\"";
          
        } else {
          
          $completeObjStr .= "\"" . $key . "\": \"" . $element . "\",";
          
        }            
      }
      $completeObjStr .= "},";
    }

//replace final comma ',' with closing bracket '}' to adhear to json syntax
$completeObjStr = substr_replace($completeObjStr, '}', strlen($completeObjStr) - 1);   


?>