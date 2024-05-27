package meteorology

import "strconv"
import "fmt"

type TemperatureUnit int

const (
	Celsius    TemperatureUnit = 0
	Fahrenheit TemperatureUnit = 1
)

func (tu TemperatureUnit) String() string {
	if tu == 0 {
		return "°C"
	} else if tu == 1 {
		return "°F"
	} else {
		return "Unknown unit"
	}
}

type Temperature struct {
	degree int
	unit   TemperatureUnit
}

func (tt Temperature) String() string {
	return strconv.Itoa(tt.degree) + " " + tt.unit.String()
}

type SpeedUnit int

const (
	KmPerHour    SpeedUnit = 0
	MilesPerHour SpeedUnit = 1
)

func (su SpeedUnit) String() string {
	units := []string{"km/h", "mph"}
	return units[su]
}

type Speed struct {
	magnitude int
	unit      SpeedUnit
}

func (ss Speed) String() string {
	return strconv.Itoa(ss.magnitude) + " " + ss.unit.String()
}

type MeteorologyData struct {
	location      string
	temperature   Temperature
	windDirection string
	windSpeed     Speed
	humidity      int
}

func (md MeteorologyData) String() string {
	return fmt.Sprintf(
		"%s: %s, Wind %s at %s, %s%% Humidity",
		md.location,
		md.temperature.String(),
		md.windDirection,
		md.windSpeed.String(),
		strconv.Itoa(md.humidity),
	)
}
