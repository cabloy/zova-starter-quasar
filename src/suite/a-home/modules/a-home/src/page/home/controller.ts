import { BeanControllerPageBase, Local, onControllerMounted } from 'zova';
import * as echarts from 'echarts';
import { markRaw } from 'vue';

@Local()
export class ControllerPageHome extends BeanControllerPageBase {
  chartInstance?: echarts.ECharts;
  chartRef: HTMLDivElement; // not ref(null)

  protected async __init__() {
    onControllerMounted(() => {
      this.loadChart();
    });
  }

  protected __dispose__() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = undefined;
    }
  }

  loadChart() {
    // Create the echarts instance
    this.chartInstance = markRaw(echarts.init(this.chartRef, 'dark'));

    // Draw the chart
    this.chartInstance.setOption({
      title: {
        text: 'ECharts Getting Started Example',
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }
}
