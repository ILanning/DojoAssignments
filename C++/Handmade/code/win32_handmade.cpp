#include <windows.h>

LRESULT CALLBACK MainWindowCallback(
	HWND   window,
	UINT   message,
	WPARAM wParam,
	LPARAM lParam) 
{
	LRESULT result = 0;
	switch (message) 
	{
		case WM_SIZE: //Window resized
		{
			OutputDebugString("WM_SIZE\n");
		} break;
		case WM_DESTROY: //Windows is closing us
		{
			OutputDebugString("WM_DESTROY\n");
		} break;
		case WM_CLOSE: //Window close button clicked
		{
			OutputDebugString("WM_CLOSE\n");
		} break;
		case WM_ACTIVATEAPP: //Window has been clicked into focus
		{
			OutputDebugString("WM_ACTIVATEAPP\n");
		} break;
		default:
		{
//			OutputDebugStringW("Other\n");
			result = DefWindowProc(window, message, wParam, lParam);
		} break;
	}
	return result;
}

int CALLBACK WinMain(
	HINSTANCE instance,
	HINSTANCE prevInstance,
	LPSTR     commandLine,
	int       showCode)
{
	//MessageBox(0, "Message!", "Title!", 0x00000004L|0x00000040L);

	WNDCLASS WindowClass = {};
	WindowClass.style = CS_OWNDC|CS_HREDRAW|CS_VREDRAW;		//UINT
	WindowClass.lpfnWndProc = MainWindowCallback;			//WNDPROC
	//WindowClass.cbClsExtra = ;							//int  Extra bytes stored along with the window
	//WindowClass.cbWndExtra = ;							//int  Extra memory stored along with the window
	WindowClass.hInstance = instance;						//HINSTANCE Handle to the program
	//WindowClass.hIcon = ;									//HICON  Sets the Icon                                           <-Useful later
	//WindowClass.hCursor;									//HCURSOR    Sets the cursor
	//WindowClass.hbrBackground = ;							//HBRUSH   Clears background for you
	//WindowClass.lpszMenuName = ;							//LPCTSTR  Sets name of the menu bar
	WindowClass.lpszClassName = "HandmadeWindowClass";		//LPCTSTR  Name of our window class

	//BloomFilter filter = BloomFilter(10);
	//filter.add("George");
	//MessageBox(0, filter.get("Paul") ? "true" : "false", "Bloom Results", 0);

	//TODO(Ian): Log this if it fails
	RegisterClass(&WindowClass);
	HWND windowHandle = CreateWindowEx(	0,				 //DWORD     dwExStyle,
									   	WindowClass.lpszClassName,				 //LPCTSTR   lpClassName,
									   	"Handmade",				 //LPCTSTR   lpWindowName,
									   	WS_OVERLAPPEDWINDOW|WS_VISIBLE,				 //DWORD     dwStyle,
									   	CW_USEDEFAULT,				 //int       x,
									   	CW_USEDEFAULT,				 //int       y,
									   	640,				 //int       nWidth,
									   	480,				 //int       nHeight,
									   	0,				 //HWND      hWndParent,
									   	0,				 //HMENU     hMenu,
									   	instance,				 //HINSTANCE hInstance,
										0);			 //LPVOID    lpParam      
	if (!windowHandle) {
		//TODO(Ian): Log this if it fails
	}
	MSG message;
	while (true) {
		BOOL result = GetMessage(&message, 0, 0, 0);
		if (result > 0) {
			TranslateMessage(&message);
			DispatchMessage(&message);
		}
		else {
			break;
		}
	}

	return 0;
}