
		import * as d3 from 'd3';

    class Zoom {
      constructor(mapRef) {
        this.mapRef = mapRef
        this.allElements = this.mapRef.selectAll('g')
        this.zoom = d3.zoom()
                    .scaleExtent([1, 4])
                    .on("zoom", this.zoomed);
        this.mapRef.call(this.zoom);
      }


      zoomed({transform}) {
        this.allElements.attr('transform', transform);
      };

      zoomIn() {
        this.mapRef.transition().call(this.zoom.scaleBy, 1.5)
      }

      zoomOut(){
        this.mapRef.transition().call(this.zoom.scaleBy, 0.5)
      }

      reset(){
        this.mapRef.transition().duration(750).call(
					this.zoom.transform,
					d3.zoomIdentity,
					d3.zoomTransform(this.mapRef.node()).invert([612 / 2, 793 / 2])
				)
      }
      
    }

    export default Zoom