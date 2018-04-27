

/*var urlxds ="http://192.168.3.142:8080/BAPSERVER/gfx/";
var url = "http://192.168.3.142:8080/WMS_GFX/";
var vacurl="http://192.168.3.142:8080/vackb/service/";
var imgurl="http://192.168.3.142:3000";
var _gprintip = '192.168.3.150';
var _hprintip = '192.168.3.151';*/
var urlxds ="http://192.168.3.146:8080/GFX/gfx/";
var url = "http://192.168.3.146:8080/WMS_GFX/";
var vacurl="http://192.168.3.146:8080/vackb/service/";
var imgurl="http://192.168.3.146:3000";
var _hprintip = '192.168.3.152';	//不合格品
var _gprintip = '192.168.3.107';	//合格品
//合格品
var _reportData2 = {};
_reportData2.Template = "base64:PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxUZnJ4UmVwb3J0IFZlcnNpb249IjUuMy4xNiIgRG90TWF0cml4UmVwb3J0PSJGYWxzZSIgSW5pRmlsZT0iXFNvZnR3YXJlXEZhc3QgUmVwb3J0cyIgUHJldmlld09wdGlvbnMuQnV0dG9ucz0iNDA5NSIgUHJldmlld09wdGlvbnMuWm9vbT0iMSIgUHJpbnRPcHRpb25zLlByaW50ZXI9IumihOiuviIgUHJpbnRPcHRpb25zLlByaW50T25TaGVldD0iMCIgUmVwb3J0T3B0aW9ucy5DcmVhdGVEYXRlPSI0MzEzMy42OTk2NDUyMTk5IiBSZXBvcnRPcHRpb25zLkRlc2NyaXB0aW9uLlRleHQ9IiIgUmVwb3J0T3B0aW9ucy5MYXN0Q2hhbmdlPSI0MzE4NC40Mzc2MzA3NzU1IiBTY3JpcHRMYW5ndWFnZT0iUGFzY2FsU2NyaXB0IiBTY3JpcHRUZXh0LlRleHQ9ImJlZ2luJiMxMzsmIzEwOyYjMTM7JiMxMDtlbmQuIj4KICA8RGF0YXNldHM+CiAgICA8aXRlbSBEYXRhU2V0PSJkc1RhYmxlMSIgRGF0YVNldE5hbWU9IlRhYmxlMSIvPgogICAgPGl0ZW0gRGF0YVNldD0iZHNUYWJsZTEiIERhdGFTZXROYW1lPSJUYWJsZTEiLz4KICA8L0RhdGFzZXRzPgogIDxUZnJ4RGF0YVBhZ2UgTmFtZT0iIiBIZWlnaHQ9IjEwMDAiIExlZnQ9IjAiIFRvcD0iMCIgV2lkdGg9IjEwMDAiLz4KICA8VGZyeFJlcG9ydFBhZ2UgTmFtZT0iUGFnZTEiIFBhcGVyV2lkdGg9IjU1IiBQYXBlckhlaWdodD0iNDAiIFBhcGVyU2l6ZT0iMjU2IiBMZWZ0TWFyZ2luPSIwIiBSaWdodE1hcmdpbj0iMCIgVG9wTWFyZ2luPSIwIiBCb3R0b21NYXJnaW49IjAiIENvbHVtbldpZHRoPSIwIiBDb2x1bW5Qb3NpdGlvbnMuVGV4dD0iIiBIR3VpZGVzLlRleHQ9IiIgVkd1aWRlcy5UZXh0PSIiPgogICAgPFRmcnhNYXN0ZXJEYXRhIE5hbWU9Ik1hc3RlckRhdGExIiBGaWxsVHlwZT0iZnRCcnVzaCIgRmlsbEdhcC5Ub3A9IjAiIEZpbGxHYXAuTGVmdD0iMCIgRmlsbEdhcC5Cb3R0b209IjAiIEZpbGxHYXAuUmlnaHQ9IjAiIEhlaWdodD0iMTUxLjE4MTEwMjM2IiBMZWZ0PSIwIiBUb3A9IjE4Ljg5NzY1IiBXaWR0aD0iMjA3Ljg3NDE1IiBDb2x1bW5zPSIxIiBDb2x1bW5XaWR0aD0iMjY0LjU2NjkyOTEzMzg1OCIgQ29sdW1uR2FwPSIwIiBEYXRhU2V0PSJkc1RhYmxlMSIgRGF0YVNldE5hbWU9IlRhYmxlMSIgUm93Q291bnQ9IjAiPgogICAgICA8VGZyeE1lbW9WaWV3IE5hbWU9IlRhYmxlMW5vMSIgTGVmdD0iNzUuNTkwNiIgVG9wPSIyMi42NzcxOCIgV2lkdGg9IjQ1LjM1NDM2IiBIZWlnaHQ9IjE4Ljg5NzY1IiBEYXRhRmllbGQ9Im5vMSIgRGF0YVNldD0iZHNUYWJsZTEiIERhdGFTZXROYW1lPSJUYWJsZTEiIEZvbnQuQ2hhcnNldD0iMSIgRm9udC5Db2xvcj0iLTE2Nzc3MjA4IiBGb250LkhlaWdodD0iLTkiIEZvbnQuTmFtZT0iQXJpYWwiIEZvbnQuU3R5bGU9IjAiIFBhcmVudEZvbnQ9IkZhbHNlIiBUZXh0PSJbVGFibGUxLiYjMzQ7bm8xJiMzNDtdIi8+CiAgICAgIDxUZnJ4TWVtb1ZpZXcgTmFtZT0iVGFibGUxbm8yIiBMZWZ0PSI5OC4yNjc3OCIgVG9wPSIxOC44OTc2NSIgV2lkdGg9Ijc5LjM3MDEzIiBIZWlnaHQ9IjE4Ljg5NzY1IiBEYXRhRmllbGQ9Im5vMiIgRGF0YVNldD0iZHNUYWJsZTEiIERhdGFTZXROYW1lPSJUYWJsZTEiIEZvbnQuQ2hhcnNldD0iMSIgRm9udC5Db2xvcj0iLTE2Nzc3MjA4IiBGb250LkhlaWdodD0iLTEyIiBGb250Lk5hbWU9IkFyaWFsIiBGb250LlN0eWxlPSIwIiBQYXJlbnRGb250PSJGYWxzZSIgVGV4dD0iW1RhYmxlMS4mIzM0O25vMiYjMzQ7XSIvPgogICAgICA8VGZyeE1lbW9WaWV3IE5hbWU9IlRhYmxlMW5vMyIgTGVmdD0iNzUuNTkwNiIgVG9wPSIzNy43OTUzIiBXaWR0aD0iMTIwLjk0NDk2IiBIZWlnaHQ9IjE4Ljg5NzY1IiBEYXRhRmllbGQ9Im5vMyIgRGF0YVNldD0iZHNUYWJsZTEiIERhdGFTZXROYW1lPSJUYWJsZTEiIEZvbnQuQ2hhcnNldD0iMSIgRm9udC5Db2xvcj0iLTE2Nzc3MjA4IiBGb250LkhlaWdodD0iLTkiIEZvbnQuTmFtZT0iQXJpYWwiIEZvbnQuU3R5bGU9IjAiIFBhcmVudEZvbnQ9IkZhbHNlIiBUZXh0PSJbVGFibGUxLiYjMzQ7bm8zJiMzNDtdIi8+CiAgICAgIDxUZnJ4TWVtb1ZpZXcgTmFtZT0iVGFibGUxbm80IiBMZWZ0PSI3NS41OTA2IiBUb3A9IjUyLjkxMzQyIiBXaWR0aD0iNDAwLjYzMDE4IiBIZWlnaHQ9IjE4Ljg5NzY1IiBEYXRhRmllbGQ9Im5vNCIgRGF0YVNldD0iZHNUYWJsZTEiIERhdGFTZXROYW1lPSJUYWJsZTEiIEZvbnQuQ2hhcnNldD0iMSIgRm9udC5Db2xvcj0iLTE2Nzc3MjA4IiBGb250LkhlaWdodD0iLTkiIEZvbnQuTmFtZT0iQXJpYWwiIEZvbnQuU3R5bGU9IjAiIFBhcmVudEZvbnQ9IkZhbHNlIiBUZXh0PSJbVGFibGUxLiYjMzQ7bm80JiMzNDtdIi8+CiAgICAgIDxUZnJ4TWVtb1ZpZXcgTmFtZT0iVGFibGUxbm81IiBMZWZ0PSI3NS41OTA2IiBUb3A9IjY4LjAzMTU0IiBXaWR0aD0iOTQuNDg4MjUiIEhlaWdodD0iMTguODk3NjUiIERhdGFGaWVsZD0ibm81IiBEYXRhU2V0PSJkc1RhYmxlMSIgRGF0YVNldE5hbWU9IlRhYmxlMSIgRm9udC5DaGFyc2V0PSIxIiBGb250LkNvbG9yPSItMTY3NzcyMDgiIEZvbnQuSGVpZ2h0PSItOSIgRm9udC5OYW1lPSJBcmlhbCIgRm9udC5TdHlsZT0iMCIgUGFyZW50Rm9udD0iRmFsc2UiIFRleHQ9IltUYWJsZTEuJiMzNDtubzUmIzM0O10iLz4KICAgICAgPFRmcnhCYXJjb2RlMkRWaWV3IE5hbWU9IkJhcmNvZGUyRDEiIExlZnQ9IjcuNTU5MDYiIFRvcD0iMjYuNDU2NzEiIFdpZHRoPSI1Ny42IiBIZWlnaHQ9IjU3LjYiIEJhclR5cGU9ImJjQ29kZURhdGFNYXRyaXgiIEJhclByb3BlcnRpZXMuQ29kZVBhZ2U9IjEyNTEiIEJhclByb3BlcnRpZXMuUGl4ZWxTaXplPSI0IiBCYXJQcm9wZXJ0aWVzLlN5bWJvbFNpemU9IkF1dG9TaXplIiBCYXJQcm9wZXJ0aWVzLkVuY29kaW5nPSJBdXRvIiBEYXRhRmllbGQ9ImR0Y29kZSIgRGF0YVNldD0iZHNUYWJsZTEiIERhdGFTZXROYW1lPSJUYWJsZTEiIFJvdGF0aW9uPSIwIiBTaG93VGV4dD0iRmFsc2UiIFRleHQ9IlspMDZZMDAwMDAwMDAwMDAwMFhQMjQxMDY1MzkxMlY0MjEyNTUwOTFUMUExODAzNjAwMDU0NjUzOSIgWm9vbT0iMC42IiBGb250U2NhbGVkPSJUcnVlIiBRdWlldFpvbmU9IjAiLz4KICAgIDwvVGZyeE1hc3RlckRhdGE+CiAgPC9UZnJ4UmVwb3J0UGFnZT4KPC9UZnJ4UmVwb3J0Pgo8RGF0YVN0cnVjdD48IS0t5bq36JmO6L2v5Lu25bel5L2c5a6k77yM5a6Y572R77yaaHR0cDovL3d3dy5jZnNvZnQuY2bvvIxRUe+8mjM2MDAyNjYwNu+8jFdlY2hhdO+8mjM2MDAyNjYwNi0tPjwhW0NEQVRBW3siVGFibGVzIjpbeyJOYW1lIjoiVGFibGUxIiwiRGF0YSI6W10sIkNvbHMiOlt7InJlcXVpcmVkIjpmYWxzZSwidHlwZSI6InN0ciIsInNpemUiOjI1NSwiTmFtZSI6Im5vMSJ9LHsicmVxdWlyZWQiOmZhbHNlLCJ0eXBlIjoic3RyIiwic2l6ZSI6MjU1LCJOYW1lIjoibm8yIn0seyJyZXF1aXJlZCI6ZmFsc2UsInR5cGUiOiJzdHIiLCJzaXplIjoyNTUsIk5hbWUiOiJubzMifSx7InJlcXVpcmVkIjpmYWxzZSwidHlwZSI6InN0ciIsInNpemUiOjI1NSwiTmFtZSI6Im5vNCJ9LHsicmVxdWlyZWQiOmZhbHNlLCJ0eXBlIjoic3RyIiwic2l6ZSI6MjU1LCJOYW1lIjoibm81In0seyJyZXF1aXJlZCI6ZmFsc2UsInR5cGUiOiJzdHIiLCJzaXplIjoyNTUsIk5hbWUiOiJkdGNvZGUifV19LHsiTmFtZSI6IlRhYmxlMSIsIkRhdGEiOltdLCJDb2xzIjpbeyJyZXF1aXJlZCI6ZmFsc2UsInR5cGUiOiJzdHIiLCJzaXplIjoyNTUsIk5hbWUiOiJubzEifSx7InJlcXVpcmVkIjpmYWxzZSwidHlwZSI6InN0ciIsInNpemUiOjI1NSwiTmFtZSI6Im5vMiJ9LHsicmVxdWlyZWQiOmZhbHNlLCJ0eXBlIjoic3RyIiwic2l6ZSI6MjU1LCJOYW1lIjoibm8zIn0seyJyZXF1aXJlZCI6ZmFsc2UsInR5cGUiOiJzdHIiLCJzaXplIjoyNTUsIk5hbWUiOiJubzQifSx7InJlcXVpcmVkIjpmYWxzZSwidHlwZSI6InN0ciIsInNpemUiOjI1NSwiTmFtZSI6ImR0Y29kZSJ9XX1dfV1dPjwvRGF0YVN0cnVjdD4=";
_reportData2.Ver = 4;
_reportData2.Copies = 1;
_reportData2.Printer = "pdfFactory Pro";
_reportData2.Preview = 0;
_reportData2.TaskID = "1234567891";
_reportData2.Tables = [];
